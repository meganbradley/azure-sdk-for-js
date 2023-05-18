/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ElasticSanManagement } = require("@azure/arm-elasticsan");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Delete a Elastic San.
 *
 * @summary Delete a Elastic San.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/preview/2021-11-20-preview/examples/ElasticSans_Delete_MaximumSet_Gen.json
 */
async function elasticSansDeleteMaximumSetGen() {
  const subscriptionId = process.env["ELASTICSANS_SUBSCRIPTION_ID"] || "aaaaaaaaaaaaaaaaaa";
  const resourceGroupName = process.env["ELASTICSANS_RESOURCE_GROUP"] || "rgelasticsan";
  const elasticSanName = "ti7q-k952-1qB3J_5";
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const result = await client.elasticSans.beginDeleteAndWait(resourceGroupName, elasticSanName);
  console.log(result);
}

/**
 * This sample demonstrates how to Delete a Elastic San.
 *
 * @summary Delete a Elastic San.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/preview/2021-11-20-preview/examples/ElasticSans_Delete_MinimumSet_Gen.json
 */
async function elasticSansDeleteMinimumSetGen() {
  const subscriptionId = process.env["ELASTICSANS_SUBSCRIPTION_ID"] || "aaaaaaaaaaaaaaaaaa";
  const resourceGroupName = process.env["ELASTICSANS_RESOURCE_GROUP"] || "rgelasticsan";
  const elasticSanName = "ti7q-k952-1qB3J_5";
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const result = await client.elasticSans.beginDeleteAndWait(resourceGroupName, elasticSanName);
  console.log(result);
}

async function main() {
  elasticSansDeleteMaximumSetGen();
  elasticSansDeleteMinimumSetGen();
}

main().catch(console.error);