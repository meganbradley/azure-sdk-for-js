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
  VirtualMachineInstallPatchesParameters,
  AzureArcVMwareManagementServiceAPI
} from "@azure/arm-connectedvmware";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to install patches on a vSphere VMware machine identity in Azure.
 *
 * @summary The operation to install patches on a vSphere VMware machine identity in Azure.
 * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/VirtualMachineInstallPatches.json
 */
async function installPatchStateOfAMachine() {
  const subscriptionId =
    process.env["CONNECTEDVMWARE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["CONNECTEDVMWARE_RESOURCE_GROUP"] || "myResourceGroupName";
  const name = "myMachineName";
  const installPatchesInput: VirtualMachineInstallPatchesParameters = {
    maximumDuration: "PT3H",
    rebootSetting: "IfRequired",
    windowsParameters: {
      classificationsToInclude: ["Critical", "Security"],
      maxPatchPublishDate: new Date("2022-01-15T02:36:43.0539904+00:00")
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureArcVMwareManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.virtualMachines.beginInstallPatchesAndWait(
    resourceGroupName,
    name,
    installPatchesInput
  );
  console.log(result);
}

async function main() {
  installPatchStateOfAMachine();
}

main().catch(console.error);
