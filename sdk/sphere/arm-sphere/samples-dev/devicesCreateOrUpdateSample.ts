/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Device, AzureSphereManagementClient } from "@azure/arm-sphere";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a Device. Use '.unassigned' or '.default' for the device group and product names to claim a device to the catalog only.
 *
 * @summary Create a Device. Use '.unassigned' or '.default' for the device group and product names to claim a device to the catalog only.
 * x-ms-original-file: specification/sphere/resource-manager/Microsoft.AzureSphere/preview/2022-09-01-preview/examples/PutDevice.json
 */
async function devicesCreateOrUpdate() {
  const subscriptionId =
    process.env["SPHERE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["SPHERE_RESOURCE_GROUP"] || "MyResourceGroup1";
  const catalogName = "MyCatalog1";
  const productName = "MyProduct1";
  const deviceGroupName = "myDeviceGroup1";
  const deviceName =
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
  const resource: Device = {};
  const credential = new DefaultAzureCredential();
  const client = new AzureSphereManagementClient(credential, subscriptionId);
  const result = await client.devices.beginCreateOrUpdateAndWait(
    resourceGroupName,
    catalogName,
    productName,
    deviceGroupName,
    deviceName,
    resource
  );
  console.log(result);
}

async function main() {
  devicesCreateOrUpdate();
}

main().catch(console.error);
