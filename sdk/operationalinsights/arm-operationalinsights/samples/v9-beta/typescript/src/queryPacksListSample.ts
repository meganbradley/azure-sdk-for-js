/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { OperationalInsightsManagementClient } from "@azure/arm-operationalinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets a list of all Log Analytics QueryPacks within a subscription.
 *
 * @summary Gets a list of all Log Analytics QueryPacks within a subscription.
 * x-ms-original-file: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/stable/2019-09-01/examples/QueryPacksList.json
 */
async function queryPacksList() {
  const subscriptionId = "86dc51d3-92ed-4d7e-947a-775ea79b4919";
  const credential = new DefaultAzureCredential();
  const client = new OperationalInsightsManagementClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.queryPacks.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

queryPacksList().catch(console.error);
