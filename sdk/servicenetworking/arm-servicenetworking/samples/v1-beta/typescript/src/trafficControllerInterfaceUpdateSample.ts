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
  TrafficControllerUpdate,
  ServiceNetworkingManagementClient
} from "@azure/arm-servicenetworking";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update a TrafficController
 *
 * @summary Update a TrafficController
 * x-ms-original-file: specification/servicenetworking/resource-manager/Microsoft.ServiceNetworking/cadl/examples/TrafficControllerPatch.json
 */
async function patchTrafficController() {
  const subscriptionId =
    process.env["SERVICENETWORKING_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["SERVICENETWORKING_RESOURCE_GROUP"] || "rg1";
  const trafficControllerName = "TC1";
  const properties: TrafficControllerUpdate = {
    properties: {
      configurationEndpoints: ["abc.eastus.trafficcontroller.azure.net"]
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ServiceNetworkingManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.trafficControllerInterface.update(
    resourceGroupName,
    trafficControllerName,
    properties
  );
  console.log(result);
}

async function main() {
  patchTrafficController();
}

main().catch(console.error);
