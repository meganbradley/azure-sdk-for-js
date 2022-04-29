/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureOrbital } from "@azure/arm-orbital";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Return list of available contacts
 *
 * @summary Return list of available contacts
 * x-ms-original-file: specification/orbital/resource-manager/Microsoft.Orbital/preview/2021-04-04-preview/examples/AvailableContactsList.json
 */
async function listOfContact() {
  const subscriptionId = "subid";
  const resourceGroupName = "rgName";
  const spacecraftName = "AQUA";
  const contactProfile = {
    id:
      "/subscriptions/subId/resourceGroups/rg/Microsoft.Orbital/contactProfiles/AQUA_DIRECTPLAYBACK_WITH_UPLINK"
  };
  const groundStationName = "westus_gs1";
  const startTime = new Date("2020-07-16T05:40:21.00Z");
  const endTime = new Date("2020-07-17T23:49:40.00Z");
  const credential = new DefaultAzureCredential();
  const client = new AzureOrbital(credential, subscriptionId);
  const result = await client.spacecrafts.beginListAvailableContactsAndWait(
    resourceGroupName,
    spacecraftName,
    contactProfile,
    groundStationName,
    startTime,
    endTime
  );
  console.log(result);
}

listOfContact().catch(console.error);
