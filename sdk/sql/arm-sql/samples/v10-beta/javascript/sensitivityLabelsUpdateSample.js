/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SqlManagementClient } = require("@azure/arm-sql");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Update sensitivity labels of a given database using an operations batch.
 *
 * @summary Update sensitivity labels of a given database using an operations batch.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/SensitivityLabelsCurrentUpdate.json
 */
async function updateSensitivityLabelsOfAGivenDatabaseUsingAnOperationsBatch() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "myRG";
  const serverName = "myServer";
  const databaseName = "myDatabase";
  const parameters = {
    operations: [
      {
        schema: "dbo",
        column: "column1",
        op: "set",
        sensitivityLabel: {
          informationType: "Financial",
          informationTypeId: "1D3652D6-422C-4115-82F1-65DAEBC665C8",
          labelId: "3A477B16-9423-432B-AA97-6069B481CEC3",
          labelName: "Highly Confidential",
          rank: "Low",
        },
        table: "table1",
      },
      {
        schema: "dbo",
        column: "column2",
        op: "set",
        sensitivityLabel: {
          informationType: "PhoneNumber",
          informationTypeId: "d22fa6e9-5ee4-3bde-4c2b-a409604c4646",
          labelId: "bf91e08c-f4f0-478a-b016-25164b2a65ff",
          labelName: "PII",
          rank: "Critical",
        },
        table: "table2",
      },
      { schema: "dbo", column: "Column3", op: "remove", table: "Table1" },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.sensitivityLabels.update(
    resourceGroupName,
    serverName,
    databaseName,
    parameters
  );
  console.log(result);
}

async function main() {
  updateSensitivityLabelsOfAGivenDatabaseUsingAnOperationsBatch();
}

main().catch(console.error);
