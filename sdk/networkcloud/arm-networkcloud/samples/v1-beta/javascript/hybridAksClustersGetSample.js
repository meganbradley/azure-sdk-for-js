/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkCloud } = require("@azure/arm-networkcloud");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get the additional details related to the provided Hybrid AKS provisioned cluster.
 *
 * @summary Get the additional details related to the provided Hybrid AKS provisioned cluster.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2022-12-12-preview/examples/HybridAksClusters_Get.json
 */
async function getHybridAksProvisionedClusterData() {
  const subscriptionId = process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName = process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const hybridAksClusterName = "hybridAksClusterName";
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.hybridAksClusters.get(resourceGroupName, hybridAksClusterName);
  console.log(result);
}

async function main() {
  getHybridAksProvisionedClusterData();
}

main().catch(console.error);