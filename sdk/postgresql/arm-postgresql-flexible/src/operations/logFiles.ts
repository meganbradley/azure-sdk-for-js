/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { LogFiles } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { PostgreSQLManagementFlexibleServerClient } from "../postgreSQLManagementFlexibleServerClient.js";
import {
  LogFile,
  LogFilesListByServerNextOptionalParams,
  LogFilesListByServerOptionalParams,
  LogFilesListByServerResponse,
  LogFilesListByServerNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing LogFiles operations. */
export class LogFilesImpl implements LogFiles {
  private readonly client: PostgreSQLManagementFlexibleServerClient;

  /**
   * Initialize a new instance of the class LogFiles class.
   * @param client Reference to the service client
   */
  constructor(client: PostgreSQLManagementFlexibleServerClient) {
    this.client = client;
  }

  /**
   * List all the server log files in a given server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  public listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: LogFilesListByServerOptionalParams,
  ): PagedAsyncIterableIterator<LogFile> {
    const iter = this.listByServerPagingAll(
      resourceGroupName,
      serverName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByServerPagingPage(
          resourceGroupName,
          serverName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByServerPagingPage(
    resourceGroupName: string,
    serverName: string,
    options?: LogFilesListByServerOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<LogFile[]> {
    let result: LogFilesListByServerResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByServer(resourceGroupName, serverName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByServerNext(
        resourceGroupName,
        serverName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByServerPagingAll(
    resourceGroupName: string,
    serverName: string,
    options?: LogFilesListByServerOptionalParams,
  ): AsyncIterableIterator<LogFile> {
    for await (const page of this.listByServerPagingPage(
      resourceGroupName,
      serverName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List all the server log files in a given server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  private _listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: LogFilesListByServerOptionalParams,
  ): Promise<LogFilesListByServerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options },
      listByServerOperationSpec,
    );
  }

  /**
   * ListByServerNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param nextLink The nextLink from the previous successful call to the ListByServer method.
   * @param options The options parameters.
   */
  private _listByServerNext(
    resourceGroupName: string,
    serverName: string,
    nextLink: string,
    options?: LogFilesListByServerNextOptionalParams,
  ): Promise<LogFilesListByServerNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, nextLink, options },
      listByServerNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServerOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/logFiles",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogFileListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByServerNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogFileListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
