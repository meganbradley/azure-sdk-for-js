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
 * This sample demonstrates how to Creates a service.
 *
 * @summary Creates a service.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-11-15/examples/CosmosDBDataTransferServiceCreate.json
 */
async function dataTransferServiceCreate() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const serviceName = "DataTransfer";
  const createUpdateParameters = {
    instanceCount: 1,
    instanceSize: "Cosmos.D4s",
    serviceType: "DataTransfer",
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.service.beginCreateAndWait(
    resourceGroupName,
    accountName,
    serviceName,
    createUpdateParameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a service.
 *
 * @summary Creates a service.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-11-15/examples/CosmosDBGraphAPIComputeServiceCreate.json
 */
async function graphApiComputeServiceCreate() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const serviceName = "GraphAPICompute";
  const createUpdateParameters = {
    instanceCount: 1,
    instanceSize: "Cosmos.D4s",
    serviceType: "GraphAPICompute",
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.service.beginCreateAndWait(
    resourceGroupName,
    accountName,
    serviceName,
    createUpdateParameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a service.
 *
 * @summary Creates a service.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-11-15/examples/CosmosDBMaterializedViewsBuilderServiceCreate.json
 */
async function materializedViewsBuilderServiceCreate() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const serviceName = "MaterializedViewsBuilder";
  const createUpdateParameters = {
    instanceCount: 1,
    instanceSize: "Cosmos.D4s",
    serviceType: "MaterializedViewsBuilder",
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.service.beginCreateAndWait(
    resourceGroupName,
    accountName,
    serviceName,
    createUpdateParameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a service.
 *
 * @summary Creates a service.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-11-15/examples/CosmosDBSqlDedicatedGatewayServiceCreate.json
 */
async function sqlDedicatedGatewayServiceCreate() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const serviceName = "SqlDedicatedGateway";
  const createUpdateParameters = {
    instanceCount: 1,
    instanceSize: "Cosmos.D4s",
    serviceType: "SqlDedicatedGateway",
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.service.beginCreateAndWait(
    resourceGroupName,
    accountName,
    serviceName,
    createUpdateParameters
  );
  console.log(result);
}

async function main() {
  dataTransferServiceCreate();
  graphApiComputeServiceCreate();
  materializedViewsBuilderServiceCreate();
  sqlDedicatedGatewayServiceCreate();
}

main().catch(console.error);
