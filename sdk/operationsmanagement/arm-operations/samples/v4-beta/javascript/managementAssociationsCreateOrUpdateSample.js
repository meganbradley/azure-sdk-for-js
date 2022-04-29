/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { OperationsManagementClient } = require("@azure/arm-operations");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates the ManagementAssociation.
 *
 * @summary Creates or updates the ManagementAssociation.
 * x-ms-original-file: specification/operationsmanagement/resource-manager/Microsoft.OperationsManagement/preview/2015-11-01-preview/examples/ManagementAssociationCreate.json
 */
async function solutionCreate() {
  const subscriptionId = "subid";
  const providerName = "providerName";
  const resourceType = "resourceType";
  const resourceName = "resourceName";
  const resourceGroupName = "rg1";
  const managementAssociationName = "managementAssociation1";
  const parameters = {
    location: "East US",
    properties: {
      applicationId:
        "/subscriptions/sub1/resourcegroups/rg1/providers/Microsoft.Appliance/Appliances/appliance1",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new OperationsManagementClient(
    credential,
    subscriptionId,
    providerName,
    resourceType,
    resourceName
  );
  const result = await client.managementAssociations.createOrUpdate(
    resourceGroupName,
    managementAssociationName,
    parameters
  );
  console.log(result);
}

solutionCreate().catch(console.error);
