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
  PrivateEndpointConnectionDescription,
  HealthcareApisManagementClient,
} from "@azure/arm-healthcareapis";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update the state of the specified private endpoint connection associated with the workspace.
 *
 * @summary Update the state of the specified private endpoint connection associated with the workspace.
 * x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2024-03-31/examples/privatelink/WorkspaceCreatePrivateEndpointConnection.json
 */
async function workspacePrivateEndpointConnectionCreateOrUpdate() {
  const subscriptionId =
    process.env["HEALTHCAREAPIS_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["HEALTHCAREAPIS_RESOURCE_GROUP"] || "testRG";
  const workspaceName = "workspace1";
  const privateEndpointConnectionName = "myConnection";
  const properties: PrivateEndpointConnectionDescription = {
    privateLinkServiceConnectionState: {
      description: "Auto-Approved",
      status: "Approved",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HealthcareApisManagementClient(credential, subscriptionId);
  const result =
    await client.workspacePrivateEndpointConnections.beginCreateOrUpdateAndWait(
      resourceGroupName,
      workspaceName,
      privateEndpointConnectionName,
      properties,
    );
  console.log(result);
}

async function main() {
  workspacePrivateEndpointConnectionCreateOrUpdate();
}

main().catch(console.error);
