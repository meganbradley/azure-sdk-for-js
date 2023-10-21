/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Return trial status for subscription by region
 *
 * @summary Return trial status for subscription by region
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2023-03-01/examples/Locations_CheckTrialAvailability.json
 */
async function locationsCheckTrialAvailability() {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const location = "eastus";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.locations.checkTrialAvailability(location);
  console.log(result);
}

/**
 * This sample demonstrates how to Return trial status for subscription by region
 *
 * @summary Return trial status for subscription by region
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2023-03-01/examples/Locations_CheckTrialAvailabilityWithSku.json
 */
async function locationsCheckTrialAvailabilityWithSku() {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const location = "eastus";
  const sku = { name: "avs52t" };
  const options = { sku };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.locations.checkTrialAvailability(location, options);
  console.log(result);
}

async function main() {
  locationsCheckTrialAvailability();
  locationsCheckTrialAvailabilityWithSku();
}

main().catch(console.error);
