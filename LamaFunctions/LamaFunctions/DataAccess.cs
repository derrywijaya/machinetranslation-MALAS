using Microsoft.Azure.Cosmos;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace LamaFunctions
{
    public class DataAccess
    {
        private  readonly string EndpointUri = "https://llamas-malas.documents.azure.com:443/";

        // The primary key for the Azure Cosmos account.
        private  readonly string PrimaryKey = "PzjjaoYonDsFBOec7YQdElje47VfZZlS73nu81NhdMXqXJ9lKCw29t2PDrWKstBDpQVyMfxkO3zS5SjRm11c6A==";
        private  CosmosClient cosmosClient;

        // The database we will create
        private  Database database;

        // The container we will create.
        private  Container container;

        // The name of the database and container we will create
        private  string databaseId = "MntDB";
        private  string containerId = "UploadedData";
        public DataAccess()
        {
            this.cosmosClient = new CosmosClient(EndpointUri, PrimaryKey, new CosmosClientOptions() { ApplicationName = "CosmosDB_Function" });
        }

        public async Task InitiateDataBase()
        {
            await CreateDatabaseAsync();
            await CreateContainerAsync();
            await ScaleContainerAsync();
        }

        private async Task CreateDatabaseAsync()
        {
            // Create a new database
            this.database = await this.cosmosClient.CreateDatabaseIfNotExistsAsync(databaseId);
            //Console.WriteLine("Created Database: {0}\n", this.database.Id);
        }
        private async Task CreateContainerAsync()
        {
            // Create a new container
            this.container = await this.database.CreateContainerIfNotExistsAsync(containerId, "/partitionKey");
            //Console.WriteLine("Created Container: {0}\n", this.container.Id);
        }

        private async Task ScaleContainerAsync()
        {
            // Read the current throughput
            try
            {
                int? throughput = await this.container.ReadThroughputAsync();
                if (throughput.HasValue)
                {
                    Console.WriteLine("Current provisioned throughput : {0}\n", throughput.Value);
                    int newThroughput = throughput.Value + 100;
                    // Update throughput
                    await this.container.ReplaceThroughputAsync(newThroughput);
                    Console.WriteLine("New provisioned throughput : {0}\n", newThroughput);
                }
            }
            catch (CosmosException cosmosException) when (cosmosException.StatusCode == HttpStatusCode.BadRequest)
            {
                Console.WriteLine("Cannot read container throuthput.");
                Console.WriteLine(cosmosException.ResponseBody);
            }

        }

        public async Task AddItemsToContainerAsync(UploadedData uploadedData)
        {
            // Create a family object for the Andersen family
            

            try
            {
                // Read the item to see if it exists.  
                ItemResponse<UploadedData> data = await this.container.ReadItemAsync<UploadedData>(uploadedData.id, new PartitionKey(uploadedData.partitionKey));
                //Console.WriteLine("Item in database with id: {0} already exists\n", andersenFamilyResponse.Resource.Id);
            }
            catch (CosmosException ex) when (ex.StatusCode == HttpStatusCode.NotFound)
            {
                // Create an item in the container representing the Andersen family. Note we provide the value of the partition key for this item, which is "Andersen"
                ItemResponse<UploadedData> andersenFamilyResponse = await this.container.CreateItemAsync<UploadedData>(uploadedData, new PartitionKey(uploadedData.partitionKey));

                // Note that after creating the item, we can access the body of the item with the Resource property off the ItemResponse. We can also access the RequestCharge property to see the amount of RUs consumed on this request.
                //Console.WriteLine("Created item in database with id: {0} Operation consumed {1} RUs.\n", andersenFamilyResponse.Resource.Id, andersenFamilyResponse.RequestCharge);
            }

            // Create a family object for the Wakefield family
           
        }
    }
}
