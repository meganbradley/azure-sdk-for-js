/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { FlowLog, NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create or update a flow log for the specified network security group.
 *
 * @summary Create or update a flow log for the specified network security group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/NetworkWatcherFlowLogCreate.json
 */
async function createOrUpdateFlowLog() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const networkWatcherName = "nw1";
  const flowLogName = "fl";
  const parameters: FlowLog = {
    format: { type: "JSON", version: 1 },
    enabled: true,
    location: "centraluseuap",
    storageId:
      "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Storage/storageAccounts/nwtest1mgvbfmqsigdxe",
    targetResourceId:
      "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/networkSecurityGroups/desmondcentral-nsg"
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.flowLogs.beginCreateOrUpdateAndWait(
    resourceGroupName,
    networkWatcherName,
    flowLogName,
    parameters
  );
  console.log(result);
}

createOrUpdateFlowLog().catch(console.error);
