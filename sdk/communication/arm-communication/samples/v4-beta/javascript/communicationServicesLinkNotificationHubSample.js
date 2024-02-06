/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CommunicationServiceManagementClient } = require("@azure/arm-communication");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Links an Azure Notification Hub to this communication service.
 *
 * @summary Links an Azure Notification Hub to this communication service.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/preview/2023-04-01-preview/examples/communicationServices/linkNotificationHub.json
 */
async function linkNotificationHub() {
  const subscriptionId =
    process.env["COMMUNICATION_SUBSCRIPTION_ID"] || "11112222-3333-4444-5555-666677778888";
  const resourceGroupName = process.env["COMMUNICATION_RESOURCE_GROUP"] || "MyResourceGroup";
  const communicationServiceName = "MyCommunicationResource";
  const linkNotificationHubParameters = {
    connectionString: "Endpoint=sb://MyNamespace.servicebus.windows.net/;SharedAccessKey=abcd1234",
    resourceId:
      "/subscriptions/11112222-3333-4444-5555-666677778888/resourceGroups/MyOtherResourceGroup/providers/Microsoft.NotificationHubs/namespaces/MyNamespace/notificationHubs/MyHub",
  };
  const options = {
    linkNotificationHubParameters,
  };
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(credential, subscriptionId);
  const result = await client.communicationServices.linkNotificationHub(
    resourceGroupName,
    communicationServiceName,
    options
  );
  console.log(result);
}

async function main() {
  linkNotificationHub();
}

main().catch(console.error);
