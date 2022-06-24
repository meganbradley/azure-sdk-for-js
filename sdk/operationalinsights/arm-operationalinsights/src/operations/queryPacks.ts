/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { QueryPacks } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { OperationalInsightsManagementClient } from "../operationalInsightsManagementClient";
import {
  LogAnalyticsQueryPack,
  QueryPacksListNextOptionalParams,
  QueryPacksListOptionalParams,
  QueryPacksListByResourceGroupNextOptionalParams,
  QueryPacksListByResourceGroupOptionalParams,
  QueryPacksListResponse,
  QueryPacksListByResourceGroupResponse,
  QueryPacksDeleteOptionalParams,
  QueryPacksGetOptionalParams,
  QueryPacksGetResponse,
  QueryPacksCreateOrUpdateOptionalParams,
  QueryPacksCreateOrUpdateResponse,
  TagsResource,
  QueryPacksUpdateTagsOptionalParams,
  QueryPacksUpdateTagsResponse,
  QueryPacksListNextResponse,
  QueryPacksListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing QueryPacks operations. */
export class QueryPacksImpl implements QueryPacks {
  private readonly client: OperationalInsightsManagementClient;

  /**
   * Initialize a new instance of the class QueryPacks class.
   * @param client Reference to the service client
   */
  constructor(client: OperationalInsightsManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of all Log Analytics QueryPacks within a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: QueryPacksListOptionalParams
  ): PagedAsyncIterableIterator<LogAnalyticsQueryPack> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: QueryPacksListOptionalParams
  ): AsyncIterableIterator<LogAnalyticsQueryPack[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: QueryPacksListOptionalParams
  ): AsyncIterableIterator<LogAnalyticsQueryPack> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of Log Analytics QueryPacks within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: QueryPacksListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<LogAnalyticsQueryPack> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: QueryPacksListByResourceGroupOptionalParams
  ): AsyncIterableIterator<LogAnalyticsQueryPack[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: QueryPacksListByResourceGroupOptionalParams
  ): AsyncIterableIterator<LogAnalyticsQueryPack> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of all Log Analytics QueryPacks within a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: QueryPacksListOptionalParams
  ): Promise<QueryPacksListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets a list of Log Analytics QueryPacks within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: QueryPacksListByResourceGroupOptionalParams
  ): Promise<QueryPacksListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Deletes a Log Analytics QueryPack.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param queryPackName The name of the Log Analytics QueryPack resource.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    queryPackName: string,
    options?: QueryPacksDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, queryPackName, options },
      deleteOperationSpec
    );
  }

  /**
   * Returns a Log Analytics QueryPack.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param queryPackName The name of the Log Analytics QueryPack resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    queryPackName: string,
    options?: QueryPacksGetOptionalParams
  ): Promise<QueryPacksGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, queryPackName, options },
      getOperationSpec
    );
  }

  /**
   * Creates (or updates) a Log Analytics QueryPack. Note: You cannot specify a different value for
   * InstrumentationKey nor AppId in the Put operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param queryPackName The name of the Log Analytics QueryPack resource.
   * @param logAnalyticsQueryPackPayload Properties that need to be specified to create or update a Log
   *                                     Analytics QueryPack.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    queryPackName: string,
    logAnalyticsQueryPackPayload: LogAnalyticsQueryPack,
    options?: QueryPacksCreateOrUpdateOptionalParams
  ): Promise<QueryPacksCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        queryPackName,
        logAnalyticsQueryPackPayload,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Updates an existing QueryPack's tags. To update other fields use the CreateOrUpdate method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param queryPackName The name of the Log Analytics QueryPack resource.
   * @param queryPackTags Updated tag information to set into the QueryPack instance.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    queryPackName: string,
    queryPackTags: TagsResource,
    options?: QueryPacksUpdateTagsOptionalParams
  ): Promise<QueryPacksUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, queryPackName, queryPackTags, options },
      updateTagsOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: QueryPacksListNextOptionalParams
  ): Promise<QueryPacksListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: QueryPacksListByResourceGroupNextOptionalParams
  ): Promise<QueryPacksListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.OperationalInsights/queryPacks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogAnalyticsQueryPackListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogAnalyticsQueryPackListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks/{queryPackName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.queryPackName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks/{queryPackName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogAnalyticsQueryPack
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.queryPackName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks/{queryPackName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LogAnalyticsQueryPack
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.logAnalyticsQueryPackPayload,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.queryPackName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/queryPacks/{queryPackName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.LogAnalyticsQueryPack
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.queryPackTags,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.queryPackName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogAnalyticsQueryPackListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogAnalyticsQueryPackListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
