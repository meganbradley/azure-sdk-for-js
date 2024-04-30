/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  MachineExtensionUpgrade,
  HybridComputeManagementClient,
} from "@azure/arm-hybridcompute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to Upgrade Machine Extensions.
 *
 * @summary The operation to Upgrade Machine Extensions.
 * x-ms-original-file: specification/hybridcompute/resource-manager/Microsoft.HybridCompute/preview/2023-10-03-preview/examples/extension/Extensions_Upgrade.json
 */
async function upgradeMachineExtensions() {
  const subscriptionId =
    process.env["HYBRIDCOMPUTE_SUBSCRIPTION_ID"] || "{subscriptionId}";
  const resourceGroupName =
    process.env["HYBRIDCOMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const machineName = "myMachine";
  const extensionUpgradeParameters: MachineExtensionUpgrade = {
    extensionTargets: {
      microsoftAzureMonitoring: { targetVersion: "2.0" },
      microsoftComputeCustomScriptExtension: { targetVersion: "1.10" },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridComputeManagementClient(credential, subscriptionId);
  const result = await client.beginUpgradeExtensionsAndWait(
    resourceGroupName,
    machineName,
    extensionUpgradeParameters,
  );
  console.log(result);
}

async function main() {
  upgradeMachineExtensions();
}

main().catch(console.error);
