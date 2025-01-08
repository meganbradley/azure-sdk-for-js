/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  FlexibleServerCapability,
  LocationBasedCapabilitiesExecuteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a LocationBasedCapabilities. */
export interface LocationBasedCapabilities {
  /**
   * Get capabilities at specified location in a given subscription.
   * @param locationName The name of the location.
   * @param options The options parameters.
   */
  listExecute(
    locationName: string,
    options?: LocationBasedCapabilitiesExecuteOptionalParams,
  ): PagedAsyncIterableIterator<FlexibleServerCapability>;
}
