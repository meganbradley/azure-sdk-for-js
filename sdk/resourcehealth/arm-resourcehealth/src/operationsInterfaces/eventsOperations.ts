/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Event,
  EventsListBySubscriptionIdOptionalParams,
  EventsListByTenantIdOptionalParams,
  EventsListBySingleResourceOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a EventsOperations. */
export interface EventsOperations {
  /**
   * Lists service health events in the subscription.
   * @param options The options parameters.
   */
  listBySubscriptionId(
    options?: EventsListBySubscriptionIdOptionalParams
  ): PagedAsyncIterableIterator<Event>;
  /**
   * Lists current service health events in the tenant.
   * @param options The options parameters.
   */
  listByTenantId(
    options?: EventsListByTenantIdOptionalParams
  ): PagedAsyncIterableIterator<Event>;
  /**
   * Lists current service health events for given resource.
   * @param resourceUri The fully qualified ID of the resource, including the resource name and resource
   *                    type. Currently the API support not nested and one nesting level resource types :
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   *                    and
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param options The options parameters.
   */
  listBySingleResource(
    resourceUri: string,
    options?: EventsListBySingleResourceOptionalParams
  ): PagedAsyncIterableIterator<Event>;
}