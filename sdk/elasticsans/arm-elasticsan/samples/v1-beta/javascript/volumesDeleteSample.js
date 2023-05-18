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
 * This sample demonstrates how to Delete an Volume.
 *
 * @summary Delete an Volume.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/preview/2021-11-20-preview/examples/Volumes_Delete_MaximumSet_Gen.json
 */
async function volumesDeleteMaximumSetGen() {
  const subscriptionId = process.env["ELASTICSANS_SUBSCRIPTION_ID"] || "aaaaaaaaaaaaaaaaaa";
  const resourceGroupName = process.env["ELASTICSANS_RESOURCE_GROUP"] || "rgelasticsan";
  const elasticSanName = "ti7q-k952-1qB3J_5";
  const volumeGroupName = "u_5I_1j4t3";
  const volumeName = "9132y";
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const result = await client.volumes.beginDeleteAndWait(
    resourceGroupName,
    elasticSanName,
    volumeGroupName,
    volumeName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Delete an Volume.
 *
 * @summary Delete an Volume.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/preview/2021-11-20-preview/examples/Volumes_Delete_MinimumSet_Gen.json
 */
async function volumesDeleteMinimumSetGen() {
  const subscriptionId = process.env["ELASTICSANS_SUBSCRIPTION_ID"] || "aaaaaaaaaaaaaaaaaa";
  const resourceGroupName = process.env["ELASTICSANS_RESOURCE_GROUP"] || "rgelasticsan";
  const elasticSanName = "ti7q-k952-1qB3J_5";
  const volumeGroupName = "u_5I_1j4t3";
  const volumeName = "9132y";
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const result = await client.volumes.beginDeleteAndWait(
    resourceGroupName,
    elasticSanName,
    volumeGroupName,
    volumeName
  );
  console.log(result);
}

async function main() {
  volumesDeleteMaximumSetGen();
  volumesDeleteMinimumSetGen();
}

main().catch(console.error);