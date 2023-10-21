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
  VirtualMachinesRetrieveBootDiagnosticsDataOptionalParams,
  ComputeManagementClient
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to retrieve SAS URIs for a virtual machine's boot diagnostic logs.
 *
 * @summary The operation to retrieve SAS URIs for a virtual machine's boot diagnostic logs.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-07-01/examples/virtualMachineExamples/VirtualMachine_RetrieveBootDiagnosticsData.json
 */
async function retrieveBootDiagnosticsDataOfAVirtualMachine() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "ResourceGroup";
  const vmName = "VMName";
  const sasUriExpirationTimeInMinutes = 60;
  const options: VirtualMachinesRetrieveBootDiagnosticsDataOptionalParams = {
    sasUriExpirationTimeInMinutes
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachines.retrieveBootDiagnosticsData(
    resourceGroupName,
    vmName,
    options
  );
  console.log(result);
}

async function main() {
  retrieveBootDiagnosticsDataOfAVirtualMachine();
}

main().catch(console.error);
