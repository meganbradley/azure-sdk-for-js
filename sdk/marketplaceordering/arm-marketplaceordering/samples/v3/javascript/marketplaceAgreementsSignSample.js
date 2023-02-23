/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MarketplaceOrderingAgreements } = require("@azure/arm-marketplaceordering");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Sign marketplace terms.
 *
 * @summary Sign marketplace terms.
 * x-ms-original-file: specification/marketplaceordering/resource-manager/Microsoft.MarketplaceOrdering/stable/2021-01-01/examples/SignMarketplaceTerms.json
 */
async function setMarketplaceTerms() {
  const subscriptionId = process.env["MARKETPLACEORDERING_SUBSCRIPTION_ID"] || "subid";
  const publisherId = "pubid";
  const offerId = "offid";
  const planId = "planid";
  const credential = new DefaultAzureCredential();
  const client = new MarketplaceOrderingAgreements(credential, subscriptionId);
  const result = await client.marketplaceAgreements.sign(publisherId, offerId, planId);
  console.log(result);
}

async function main() {
  setMarketplaceTerms();
}

main().catch(console.error);
