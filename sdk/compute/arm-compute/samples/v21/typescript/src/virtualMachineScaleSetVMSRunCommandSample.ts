/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { RunCommandInput, ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Run command on a virtual machine in a VM scale set.
 *
 * @summary Run command on a virtual machine in a VM scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-09-01/examples/runCommandExamples/VirtualMachineScaleSetVMRunCommand.json
 */
async function virtualMachineScaleSetVMSRunCommand() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const vmScaleSetName = "myVirtualMachineScaleSet";
  const instanceId = "0";
  const parameters: RunCommandInput = {
    commandId: "RunPowerShellScript",
    script: ["Write-Host Hello World!"]
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSetVMs.beginRunCommandAndWait(
    resourceGroupName,
    vmScaleSetName,
    instanceId,
    parameters
  );
  console.log(result);
}

async function main() {
  virtualMachineScaleSetVMSRunCommand();
}

main().catch(console.error);
