import { InterpolationConfig } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CosmosClient } from '@azure/cosmos';
import { IConfig } from './models.service';

@Injectable({
  providedIn: 'root'
})




export class DataAccessService {

  public client: CosmosClient;
  public config: IConfig;

  private endpoint: any = 'https://llamas-malas.documents.azure.com:443/';  // = this.config.endpoint
  private key: any = 'PzjjaoYonDsFBOec7YQdElje47VfZZlS73nu81NhdMXqXJ9lKCw29t2PDrWKstBDpQVyMfxkO3zS5SjRm11c6A==' ;  // = config.key

  private databaseId: any = 'MntDB'; // = config.database.id
  private containerId: any = 'UploadedData'; // = config.container.id
private  partitionKey: any = { kind: 'Hash', paths: ['/partitionKey'] };
private options: any;
// const options = {
//       endpoint: endpoint,
//       key: key,
//       userAgentSuffix: 'CosmosDBJavascriptQuickstart'
//     };

  constructor() {
    this.config = {} as IConfig;
    // this.initiate();
    this.client = new CosmosClient(this.options);

    this.createDatabase()
    .then(() => this.readDatabase())
    .then(() => this.createContainer())
    .then(() => this.readContainer())
    .then(() => this.scaleContainer());

   }



   async createDatabase() {
    const { database } = await this.client.databases.createIfNotExists({
      id: this.databaseId
    });
    console.log(`Created database:\n${database.id}\n`);
  }


 async readDatabase() {
    const { resource: databaseDefinition } = await this.client
      .database(this.databaseId)
      .read();
    console.log(`Reading database:\n${databaseDefinition.id}\n`);
  }

  /**
   * Create the container if it does not exist
   */
  async createContainer() {
    const { container } = await this.client
      .database(this.databaseId)
      .containers.createIfNotExists(
        { id: this.containerId, partitionKey: this.partitionKey }
      );
    console.log(`Created container:\n${this.containerId}\n`);
  }

  /**
   * Read the container definition
   */
  async readContainer() {
    const { resource: containerDefinition } = await this.client
      .database(this.databaseId)
      .container(this.containerId)
      .read();
    console.log(`Reading container:\n${containerDefinition.id}\n`);
  }

  /**
   * Scale a container
   * You can scale the throughput (RU/s) of your container up and down to meet the needs of the workload.
   * more: https://aka.ms/cosmos-request-units
   */
  async scaleContainer() {
    const { resource: containerDefinition } = await this.client
      .database(this.databaseId)
      .container(this.containerId)
      .read();

    try {
        const {resources: offers} = await this.client.offers.readAll().fetchAll();

        const newRups = 500;
        for (const offer of offers) {
          if (containerDefinition._rid !== offer.offerResourceId) {
              continue;
          }
          offer.content.offerThroughput = newRups;
          const offerToReplace = this.client.offer(offer.id);
          await offerToReplace.replace(offer);
          console.log(`Updated offer to ${newRups} RU/s\n`);
          break;
        }
    } catch (err) {
        if (err.code === 400) {
            console.log(`Cannot read container throuthput.\n`);
            console.log(err.body.message);
        } else {
            throw err;
        }
    }
  }

  /**
   * Create family item if it does not exist
   */
  async createFamilyItem(itemBody) {
    const { item } = await this.client
      .database(this.databaseId)
      .container(this.containerId)
      .items.upsert(itemBody);
    console.log(`Created family item with id:\n${itemBody.id}\n`);
  }

  /**
   * Query the container using SQL
   */
   async queryContainer() {
    console.log(`Querying container:\n${this.config.container.id}`);

    // query to return all children in a family
    // Including the partition key value of country in the WHERE filter results in a more efficient query
    const querySpec = {
      query: 'SELECT VALUE r.children FROM root r WHERE r.partitionKey = @country',
      parameters: [
        {
          name: '@country',
          value: 'USA'
        }
      ]
    };

    const { resources: results } = await this.client
      .database(this.databaseId)
      .container(this.containerId)
      .items.query(querySpec)
      .fetchAll();
    for (const queryResult of results) {
      const resultString = JSON.stringify(queryResult);
      console.log(`\tQuery returned ${resultString}\n`);
    }
  }

  /**
   * Replace the item by ID.
   */
  async replaceFamilyItem(itemBody) {
    console.log(`Replacing item:\n${itemBody.id}\n`);
    // Change property 'grade'
    itemBody.children[0].grade = 6;
    const { item } = await this.client
      .database(this.databaseId)
      .container(this.containerId)
      .item(itemBody.id, itemBody.partitionKey)
      .replace(itemBody);
  }

  /**
   * Delete the item by ID.
   */
   async deleteFamilyItem(itemBody) {
    await this.client
      .database(this.databaseId)
      .container(this.containerId)
      .item(itemBody.id, itemBody.partitionKey)
      .delete(itemBody);
    console.log(`Deleted item:\n${itemBody.id}\n`);
  }

  /**
   * Cleanup the database and collection on completion
   */
   async cleanup() {
    await this.client.database(this.databaseId).delete();
  }

  /**
   * Exit the app with a prompt
   * @param {string} message - The message to display
   */
  //  exit(message) {
  //   console.log(message)
  //   console.log('Press any key to exit')
  //   process.stdin.setRawMode(true)
  //   process.stdin.resume()
  //   process.stdin.on('data', process.exit.bind(process, 0))
  // }

  testDB() {

  this.createDatabase()
    .then(() => this.readDatabase())
    .then(() => this.createContainer())
    .then(() => this.readContainer())
    .then(() => this.scaleContainer())
    .then(() => this.createFamilyItem(this.config.items.Andersen))
    .then(() => this.createFamilyItem(this.config.items.Wakefield))
    .then(() => this.queryContainer())
    .then(() => this.replaceFamilyItem(this.config.items.Andersen))
    .then(() => this.queryContainer());
    // .then(() => deleteFamilyItem(config.items.Andersen))
    // .then(() => {
    //   this.exit(`Completed successfully`)
    // })
    // .catch(error => {
    //   this.exit(`Completed with error ${JSON.stringify(error)}`)
    // });

  }





}
