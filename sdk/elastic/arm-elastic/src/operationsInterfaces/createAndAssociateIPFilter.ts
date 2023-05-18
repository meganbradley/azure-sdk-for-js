/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import { CreateAndAssociateIPFilterCreateOptionalParams } from "../models";

/** Interface representing a CreateAndAssociateIPFilter. */
export interface CreateAndAssociateIPFilter {
  /**
   * Create and Associate IP traffic filter for the given deployment.
   * @param resourceGroupName The name of the resource group to which the Elastic resource belongs.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    monitorName: string,
    options?: CreateAndAssociateIPFilterCreateOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Create and Associate IP traffic filter for the given deployment.
   * @param resourceGroupName The name of the resource group to which the Elastic resource belongs.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    monitorName: string,
    options?: CreateAndAssociateIPFilterCreateOptionalParams
  ): Promise<void>;
}