from azure.cosmos import exceptions, CosmosClient, PartitionKey

# Initialize the Cosmos client
endpoint = "https://llamas-malas.documents.azure.com:443/"
key = 'PzjjaoYonDsFBOec7YQdElje47VfZZlS73nu81NhdMXqXJ9lKCw29t2PDrWKstBDpQVyMfxkO3zS5SjRm11c6A=='

# <create_cosmos_client>
client = CosmosClient(endpoint, key)
# </create_cosmos_client>

# Create a database
# <create_database_if_not_exists>
database_name = 'MntDB'
database = client.create_database_if_not_exists(id=database_name)
# </create_database_if_not_exists>

# Create a container
# Using a good partition key improves the performance of database operations.
# <create_container_if_not_exists>
container_name = 'UploadedData'
container = database.create_container_if_not_exists(
    id=container_name, 
    partition_key=PartitionKey(path="/partitionKey"),
    offer_throughput=400
)

# Add items to the container


# Query these items using the SQL query syntax. 
# Specifying the partition key value in the query allows Cosmos DB to retrieve data only from the relevant partitions, which improves performance
# <query_items>
query = "SELECT * FROM c"

items = list(container.query_items(
    query=query,
    enable_cross_partition_query=True
))

request_charge = container.client_connection.last_response_headers['x-ms-request-charge']

print('Query returned {0} items. Operation consumed {1} request units'.format(len(items), request_charge))
print(items)
# </query_items>

import json
with open('test_output', 'w') as fout:
    json.dump(items, fout)

