/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  LtrPreBackupRequest,
  FlexibleServerTriggerLtrPreBackupOptionalParams,
  FlexibleServerTriggerLtrPreBackupResponse,
  LtrBackupRequest,
  FlexibleServerStartLtrBackupOptionalParams,
  FlexibleServerStartLtrBackupResponse,
} from "../models/index.js";

/** Interface representing a FlexibleServer. */
export interface FlexibleServer {
  /**
   * PreBackup operation performs all the checks that are needed for the subsequent long term retention
   * backup operation to succeed.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  triggerLtrPreBackup(
    resourceGroupName: string,
    serverName: string,
    parameters: LtrPreBackupRequest,
    options?: FlexibleServerTriggerLtrPreBackupOptionalParams,
  ): Promise<FlexibleServerTriggerLtrPreBackupResponse>;
  /**
   * Start the Long Term Retention Backup operation
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginStartLtrBackup(
    resourceGroupName: string,
    serverName: string,
    parameters: LtrBackupRequest,
    options?: FlexibleServerStartLtrBackupOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<FlexibleServerStartLtrBackupResponse>,
      FlexibleServerStartLtrBackupResponse
    >
  >;
  /**
   * Start the Long Term Retention Backup operation
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginStartLtrBackupAndWait(
    resourceGroupName: string,
    serverName: string,
    parameters: LtrBackupRequest,
    options?: FlexibleServerStartLtrBackupOptionalParams,
  ): Promise<FlexibleServerStartLtrBackupResponse>;
}
