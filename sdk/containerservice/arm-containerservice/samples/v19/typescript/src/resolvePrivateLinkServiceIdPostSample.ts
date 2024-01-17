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
  PrivateLinkResource,
  ContainerServiceClient
} from "@azure/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the private link service ID for the specified managed cluster.
 *
 * @summary Gets the private link service ID for the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/aks/stable/2023-10-01/examples/ResolvePrivateLinkServiceId.json
 */
async function resolveThePrivateLinkServiceIdForManagedCluster() {
  const subscriptionId =
    process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["CONTAINERSERVICE_RESOURCE_GROUP"] || "rg1";
  const resourceName = "clustername1";
  const parameters: PrivateLinkResource = { name: "management" };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.resolvePrivateLinkServiceId.post(
    resourceGroupName,
    resourceName,
    parameters
  );
  console.log(result);
}

async function main() {
  resolveThePrivateLinkServiceIdForManagedCluster();
}

main().catch(console.error);
