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
  StorageAccountMigration,
  StorageManagementClient
} from "@azure/arm-storage";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Account Migration request can be triggered for a storage account to change its redundancy level. The migration updates the non-zonal redundant storage account to a zonal redundant account or vice-versa in order to have better reliability and availability. Zone-redundant storage (ZRS) replicates your storage account synchronously across three Azure availability zones in the primary region.
 *
 * @summary Account Migration request can be triggered for a storage account to change its redundancy level. The migration updates the non-zonal redundant storage account to a zonal redundant account or vice-versa in order to have better reliability and availability. Zone-redundant storage (ZRS) replicates your storage account synchronously across three Azure availability zones in the primary region.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-01-01/examples/StorageAccountPostMigration.json
 */
async function storageAccountPostMigration() {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["STORAGE_RESOURCE_GROUP"] || "resource-group-name";
  const accountName = "accountname";
  const parameters: StorageAccountMigration = { targetSkuName: "Standard_ZRS" };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.beginCustomerInitiatedMigrationAndWait(
    resourceGroupName,
    accountName,
    parameters
  );
  console.log(result);
}

async function main() {
  storageAccountPostMigration();
}

main().catch(console.error);
