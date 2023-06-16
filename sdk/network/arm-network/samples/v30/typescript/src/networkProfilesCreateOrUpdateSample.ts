/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkProfile, NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a network profile.
 *
 * @summary Creates or updates a network profile.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-09-01/examples/NetworkProfileCreateConfigOnly.json
 */
async function createNetworkProfileDefaults() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const networkProfileName = "networkProfile1";
  const parameters: NetworkProfile = {
    containerNetworkInterfaceConfigurations: [
      {
        name: "eth1",
        ipConfigurations: [
          {
            name: "ipconfig1",
            subnet: {
              id:
                "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/networkProfileVnet/subnets/networkProfileSubnet1"
            }
          }
        ]
      }
    ],
    location: "westus"
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.networkProfiles.createOrUpdate(
    resourceGroupName,
    networkProfileName,
    parameters
  );
  console.log(result);
}

async function main() {
  createNetworkProfileDefaults();
}

main().catch(console.error);