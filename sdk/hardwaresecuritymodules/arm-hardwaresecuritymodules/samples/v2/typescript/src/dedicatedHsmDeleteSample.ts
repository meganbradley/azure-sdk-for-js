/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureDedicatedHSMResourceProvider } from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes the specified Azure Dedicated HSM.
 *
 * @summary Deletes the specified Azure Dedicated HSM.
 * x-ms-original-file: specification/hardwaresecuritymodules/resource-manager/Microsoft.HardwareSecurityModules/stable/2021-11-30/examples/DedicatedHsm_Delete.json
 */
async function deleteADedicatedHsm() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "hsm-group";
  const name = "hsm1";
  const credential = new DefaultAzureCredential();
  const client = new AzureDedicatedHSMResourceProvider(
    credential,
    subscriptionId
  );
  const result = await client.dedicatedHsmOperations.beginDeleteAndWait(
    resourceGroupName,
    name
  );
  console.log(result);
}

deleteADedicatedHsm().catch(console.error);