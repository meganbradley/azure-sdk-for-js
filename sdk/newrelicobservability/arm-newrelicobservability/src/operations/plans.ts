/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Plans } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NewRelicObservability } from "../newRelicObservability";
import {
  PlanDataResource,
  PlansListNextOptionalParams,
  PlansListOptionalParams,
  PlansListResponse,
  PlansListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Plans operations. */
export class PlansImpl implements Plans {
  private readonly client: NewRelicObservability;

  /**
   * Initialize a new instance of the class Plans class.
   * @param client Reference to the service client
   */
  constructor(client: NewRelicObservability) {
    this.client = client;
  }

  /**
   * List plans data
   * @param options The options parameters.
   */
  public list(
    options?: PlansListOptionalParams
  ): PagedAsyncIterableIterator<PlanDataResource> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: PlansListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<PlanDataResource[]> {
    let result: PlansListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: PlansListOptionalParams
  ): AsyncIterableIterator<PlanDataResource> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List plans data
   * @param options The options parameters.
   */
  private _list(options?: PlansListOptionalParams): Promise<PlansListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: PlansListNextOptionalParams
  ): Promise<PlansListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/NewRelic.Observability/plans",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PlanDataListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.accountId,
    Parameters.organizationId
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PlanDataListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};