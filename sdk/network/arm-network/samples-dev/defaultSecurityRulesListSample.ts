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
 * This sample demonstrates how to Gets all default security rules in a network security group.
 *
 * @summary Gets all default security rules in a network security group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-09-01/examples/DefaultSecurityRuleList.json
 */
async function defaultSecurityRuleList() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "testrg";
  const networkSecurityGroupName = "nsg1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.defaultSecurityRules.list(
    resourceGroupName,
    networkSecurityGroupName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  defaultSecurityRuleList();
}

main().catch(console.error);
