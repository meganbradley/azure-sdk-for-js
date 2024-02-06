/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Redistribute throughput for an Azure Cosmos DB MongoDB container
 *
 * @summary Redistribute throughput for an Azure Cosmos DB MongoDB container
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2023-09-15-preview/examples/CosmosDBMongoDBCollectionRedistributeThroughput.json
 */
async function cosmosDbMongoDbcollectionRedistributeThroughput() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const collectionName = "collectionName";
  const redistributeThroughputParameters = {
    resource: {
      sourcePhysicalPartitionThroughputInfo: [{ id: "2", throughput: 5000 }, { id: "3" }],
      targetPhysicalPartitionThroughputInfo: [
        { id: "0", throughput: 5000 },
        { id: "1", throughput: 5000 },
      ],
      throughputPolicy: "custom",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.mongoDBResources.beginMongoDBContainerRedistributeThroughputAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    collectionName,
    redistributeThroughputParameters
  );
  console.log(result);
}

async function main() {
  cosmosDbMongoDbcollectionRedistributeThroughput();
}

main().catch(console.error);
