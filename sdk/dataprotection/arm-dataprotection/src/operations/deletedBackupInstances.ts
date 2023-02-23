/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DeletedBackupInstances } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataProtectionClient } from "../dataProtectionClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DeletedBackupInstanceResource,
  DeletedBackupInstancesListNextOptionalParams,
  DeletedBackupInstancesListOptionalParams,
  DeletedBackupInstancesListResponse,
  DeletedBackupInstancesGetOptionalParams,
  DeletedBackupInstancesGetResponse,
  DeletedBackupInstancesUndeleteOptionalParams,
  DeletedBackupInstancesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DeletedBackupInstances operations. */
export class DeletedBackupInstancesImpl implements DeletedBackupInstances {
  private readonly client: DataProtectionClient;

  /**
   * Initialize a new instance of the class DeletedBackupInstances class.
   * @param client Reference to the service client
   */
  constructor(client: DataProtectionClient) {
    this.client = client;
  }

  /**
   * Gets deleted backup instances belonging to a backup vault
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    vaultName: string,
    options?: DeletedBackupInstancesListOptionalParams
  ): PagedAsyncIterableIterator<DeletedBackupInstanceResource> {
    const iter = this.listPagingAll(resourceGroupName, vaultName, options);
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
        return this.listPagingPage(
          resourceGroupName,
          vaultName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    vaultName: string,
    options?: DeletedBackupInstancesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DeletedBackupInstanceResource[]> {
    let result: DeletedBackupInstancesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, vaultName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        vaultName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    vaultName: string,
    options?: DeletedBackupInstancesListOptionalParams
  ): AsyncIterableIterator<DeletedBackupInstanceResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      vaultName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets deleted backup instances belonging to a backup vault
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    vaultName: string,
    options?: DeletedBackupInstancesListOptionalParams
  ): Promise<DeletedBackupInstancesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, options },
      listOperationSpec
    );
  }

  /**
   * Gets a deleted backup instance with name in a backup vault
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName The name of the deleted backup instance
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    options?: DeletedBackupInstancesGetOptionalParams
  ): Promise<DeletedBackupInstancesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, backupInstanceName, options },
      getOperationSpec
    );
  }

  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName The name of the deleted backup instance
   * @param options The options parameters.
   */
  async beginUndelete(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    options?: DeletedBackupInstancesUndeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, vaultName, backupInstanceName, options },
      undeleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName The name of the deleted backup instance
   * @param options The options parameters.
   */
  async beginUndeleteAndWait(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    options?: DeletedBackupInstancesUndeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginUndelete(
      resourceGroupName,
      vaultName,
      backupInstanceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    vaultName: string,
    nextLink: string,
    options?: DeletedBackupInstancesListNextOptionalParams
  ): Promise<DeletedBackupInstancesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/deletedBackupInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedBackupInstanceResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/deletedBackupInstances/{backupInstanceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedBackupInstanceResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.backupInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const undeleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/deletedBackupInstances/{backupInstanceName}/undelete",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.backupInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedBackupInstanceResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
