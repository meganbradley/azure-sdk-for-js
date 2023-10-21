/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { JobDefinition, StorageMoverClient } from "@azure/arm-storagemover";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a Job Definition resource, which contains configuration for a single unit of managed data transfer.
 *
 * @summary Creates or updates a Job Definition resource, which contains configuration for a single unit of managed data transfer.
 * x-ms-original-file: specification/storagemover/resource-manager/Microsoft.StorageMover/preview/2023-07-01-preview/examples/JobDefinitions_CreateOrUpdate.json
 */
async function jobDefinitionsCreateOrUpdate() {
  const subscriptionId =
    process.env["STORAGEMOVER_SUBSCRIPTION_ID"] ||
    "60bcfc77-6589-4da2-b7fd-f9ec9322cf95";
  const resourceGroupName =
    process.env["STORAGEMOVER_RESOURCE_GROUP"] || "examples-rg";
  const storageMoverName = "examples-storageMoverName";
  const projectName = "examples-projectName";
  const jobDefinitionName = "examples-jobDefinitionName";
  const jobDefinition: JobDefinition = {
    description: "Example Job Definition Description",
    agentName: "migration-agent",
    copyMode: "Additive",
    sourceName: "examples-sourceEndpointName",
    sourceSubpath: "/",
    targetName: "examples-targetEndpointName",
    targetSubpath: "/"
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageMoverClient(credential, subscriptionId);
  const result = await client.jobDefinitions.createOrUpdate(
    resourceGroupName,
    storageMoverName,
    projectName,
    jobDefinitionName,
    jobDefinition
  );
  console.log(result);
}

async function main() {
  jobDefinitionsCreateOrUpdate();
}

main().catch(console.error);
