/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AutomationClient } = require("@azure/arm-automation");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Retrieve a sync job stream identified by stream id.
 *
 * @summary Retrieve a sync job stream identified by stream id.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/preview/2020-01-13-preview/examples/sourceControlSyncJobStreams/getSourceControlSyncJobStreamsByStreamId.json
 */
async function getASyncJobStreamIdentifiedBySyncJobStreamId() {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "myAutomationAccount33";
  const sourceControlName = "MySourceControl";
  const sourceControlSyncJobId = "ce6fe3e3-9db3-4096-a6b4-82bfb4c10a2b";
  const streamId = "b86c5c31-e9fd-4734-8764-ddd6c101e706_00636596855139029522_00000000000000000007";
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.sourceControlSyncJobStreams.get(
    resourceGroupName,
    automationAccountName,
    sourceControlName,
    sourceControlSyncJobId,
    streamId
  );
  console.log(result);
}

async function main() {
  getASyncJobStreamIdentifiedBySyncJobStreamId();
}

main().catch(console.error);
