/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MicrosoftSupport } from "@azure/arm-support";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all the Files information under a workspace for an Azure subscription.
 *
 * @summary Lists all the Files information under a workspace for an Azure subscription.
 * x-ms-original-file: specification/support/resource-manager/Microsoft.Support/preview/2022-09-01-preview/examples/ListFilesForSubscriptionUnderFileWorkspace.json
 */
async function listFilesUnderAWorkspaceForASubscription() {
  const subscriptionId = process.env["SUPPORT_SUBSCRIPTION_ID"] || "subid";
  const fileWorkspaceName = "testworkspace";
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSupport(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.files.list(fileWorkspaceName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listFilesUnderAWorkspaceForASubscription();
}

main().catch(console.error);
