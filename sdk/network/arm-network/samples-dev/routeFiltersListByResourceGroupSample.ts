/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets all route filters in a resource group.
 *
 * @summary Gets all route filters in a resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-05-01/examples/RouteFilterListByResourceGroup.json
 */
async function routeFilterListByResourceGroup() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.routeFilters.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  routeFilterListByResourceGroup();
}

main().catch(console.error);
