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
  DnsForwardingRulesetPatch,
  DnsResolverManagementClient
} from "@azure/arm-dnsresolver";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates a DNS forwarding ruleset.
 *
 * @summary Updates a DNS forwarding ruleset.
 * x-ms-original-file: specification/dnsresolver/resource-manager/Microsoft.Network/stable/2022-07-01/examples/DnsForwardingRuleset_Patch.json
 */
async function updateDnsForwardingRuleset() {
  const subscriptionId =
    process.env["DNSRESOLVER_SUBSCRIPTION_ID"] ||
    "abdd4249-9f34-4cc6-8e42-c2e32110603e";
  const resourceGroupName =
    process.env["DNSRESOLVER_RESOURCE_GROUP"] || "sampleResourceGroup";
  const dnsForwardingRulesetName = "sampleDnsForwardingRuleset";
  const parameters: DnsForwardingRulesetPatch = { tags: { key1: "value1" } };
  const credential = new DefaultAzureCredential();
  const client = new DnsResolverManagementClient(credential, subscriptionId);
  const result = await client.dnsForwardingRulesets.beginUpdateAndWait(
    resourceGroupName,
    dnsForwardingRulesetName,
    parameters
  );
  console.log(result);
}

async function main() {
  updateDnsForwardingRuleset();
}

main().catch(console.error);
