/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Triggers } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ImageBuilderClient } from "../imageBuilderClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  Trigger,
  TriggersListByImageTemplateNextOptionalParams,
  TriggersListByImageTemplateOptionalParams,
  TriggersListByImageTemplateResponse,
  TriggersGetOptionalParams,
  TriggersGetResponse,
  TriggersCreateOrUpdateOptionalParams,
  TriggersCreateOrUpdateResponse,
  TriggersDeleteOptionalParams,
  TriggersListByImageTemplateNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Triggers operations. */
export class TriggersImpl implements Triggers {
  private readonly client: ImageBuilderClient;

  /**
   * Initialize a new instance of the class Triggers class.
   * @param client Reference to the service client
   */
  constructor(client: ImageBuilderClient) {
    this.client = client;
  }

  /**
   * List all triggers for the specified Image Template resource
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param options The options parameters.
   */
  public listByImageTemplate(
    resourceGroupName: string,
    imageTemplateName: string,
    options?: TriggersListByImageTemplateOptionalParams
  ): PagedAsyncIterableIterator<Trigger> {
    const iter = this.listByImageTemplatePagingAll(
      resourceGroupName,
      imageTemplateName,
      options
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
        return this.listByImageTemplatePagingPage(
          resourceGroupName,
          imageTemplateName,
          options,
          settings
        );
      }
    };
  }

  private async *listByImageTemplatePagingPage(
    resourceGroupName: string,
    imageTemplateName: string,
    options?: TriggersListByImageTemplateOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Trigger[]> {
    let result: TriggersListByImageTemplateResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByImageTemplate(
        resourceGroupName,
        imageTemplateName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByImageTemplateNext(
        resourceGroupName,
        imageTemplateName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByImageTemplatePagingAll(
    resourceGroupName: string,
    imageTemplateName: string,
    options?: TriggersListByImageTemplateOptionalParams
  ): AsyncIterableIterator<Trigger> {
    for await (const page of this.listByImageTemplatePagingPage(
      resourceGroupName,
      imageTemplateName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List all triggers for the specified Image Template resource
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param options The options parameters.
   */
  private _listByImageTemplate(
    resourceGroupName: string,
    imageTemplateName: string,
    options?: TriggersListByImageTemplateOptionalParams
  ): Promise<TriggersListByImageTemplateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, imageTemplateName, options },
      listByImageTemplateOperationSpec
    );
  }

  /**
   * Get the specified trigger for the specified image template resource
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param triggerName The name of the trigger
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    imageTemplateName: string,
    triggerName: string,
    options?: TriggersGetOptionalParams
  ): Promise<TriggersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, imageTemplateName, triggerName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update a trigger for the specified virtual machine image template
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param triggerName The name of the trigger
   * @param parameters Parameters supplied to the CreateTrigger operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    imageTemplateName: string,
    triggerName: string,
    parameters: Trigger,
    options?: TriggersCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<TriggersCreateOrUpdateResponse>,
      TriggersCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<TriggersCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        imageTemplateName,
        triggerName,
        parameters,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      TriggersCreateOrUpdateResponse,
      OperationState<TriggersCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a trigger for the specified virtual machine image template
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param triggerName The name of the trigger
   * @param parameters Parameters supplied to the CreateTrigger operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    imageTemplateName: string,
    triggerName: string,
    parameters: Trigger,
    options?: TriggersCreateOrUpdateOptionalParams
  ): Promise<TriggersCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      imageTemplateName,
      triggerName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a trigger for the specified virtual machine image template
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param triggerName The name of the trigger
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    imageTemplateName: string,
    triggerName: string,
    options?: TriggersDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, imageTemplateName, triggerName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a trigger for the specified virtual machine image template
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param triggerName The name of the trigger
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    imageTemplateName: string,
    triggerName: string,
    options?: TriggersDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      imageTemplateName,
      triggerName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByImageTemplateNext
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param nextLink The nextLink from the previous successful call to the ListByImageTemplate method.
   * @param options The options parameters.
   */
  private _listByImageTemplateNext(
    resourceGroupName: string,
    imageTemplateName: string,
    nextLink: string,
    options?: TriggersListByImageTemplateNextOptionalParams
  ): Promise<TriggersListByImageTemplateNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, imageTemplateName, nextLink, options },
      listByImageTemplateNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByImageTemplateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/triggers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerCollection
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
    Parameters.imageTemplateName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/triggers/{triggerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Trigger
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
    Parameters.imageTemplateName,
    Parameters.triggerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/triggers/{triggerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Trigger
    },
    201: {
      bodyMapper: Mappers.Trigger
    },
    202: {
      bodyMapper: Mappers.Trigger
    },
    204: {
      bodyMapper: Mappers.Trigger
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.imageTemplateName,
    Parameters.triggerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/triggers/{triggerName}",
  httpMethod: "DELETE",
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
    Parameters.imageTemplateName,
    Parameters.triggerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByImageTemplateNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.imageTemplateName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
