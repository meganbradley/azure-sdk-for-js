/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SynapseManagementClient } = require("@azure/arm-synapse");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or Update a Azure Active Directory only authentication property for the workspaces
 *
 * @summary Create or Update a Azure Active Directory only authentication property for the workspaces
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/CreateOrUpdateAzureADOnlyAuthentication.json
 */
async function createOrUpdateAzureActiveDirectoryOnlyAuthenticationProperty() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "workspace-6852";
  const workspaceName = "workspace-2080";
  const azureADOnlyAuthenticationName = "default";
  const azureADOnlyAuthenticationInfo = {
    azureADOnlyAuthentication: true,
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.azureADOnlyAuthentications.beginCreateAndWait(
    resourceGroupName,
    workspaceName,
    azureADOnlyAuthenticationName,
    azureADOnlyAuthenticationInfo
  );
  console.log(result);
}

createOrUpdateAzureActiveDirectoryOnlyAuthenticationProperty().catch(console.error);