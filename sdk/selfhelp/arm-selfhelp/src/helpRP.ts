/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest,
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  OperationsImpl,
  CheckNameAvailabilityImpl,
  DiagnosticsImpl,
  DiscoverySolutionImpl,
  SolutionImpl,
  SimplifiedSolutionsImpl,
  TroubleshootersImpl,
  SolutionSelfHelpImpl,
  DiscoverySolutionNLPTenantScopeImpl,
  DiscoverySolutionNLPSubscriptionScopeImpl,
} from "./operations";
import {
  Operations,
  CheckNameAvailability,
  Diagnostics,
  DiscoverySolution,
  Solution,
  SimplifiedSolutions,
  Troubleshooters,
  SolutionSelfHelp,
  DiscoverySolutionNLPTenantScope,
  DiscoverySolutionNLPSubscriptionScope,
} from "./operationsInterfaces";
import { HelpRPOptionalParams } from "./models";

export class HelpRP extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId?: string;

  /**
   * Initializes a new instance of the HelpRP class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription. The value must be an UUID.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: HelpRPOptionalParams,
  );
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: HelpRPOptionalParams,
  );
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionIdOrOptions?: HelpRPOptionalParams | string,
    options?: HelpRPOptionalParams,
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }

    let subscriptionId: string | undefined;

    if (typeof subscriptionIdOrOptions === "string") {
      subscriptionId = subscriptionIdOrOptions;
    } else if (typeof subscriptionIdOrOptions === "object") {
      options = subscriptionIdOrOptions;
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: HelpRPOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials,
    };

    const packageDetails = `azsdk-js-arm-selfhelp/2.0.0-beta.4`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix,
      },
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com",
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] =
        options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName,
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName,
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge,
          },
        }),
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2024-03-01-preview";
    this.operations = new OperationsImpl(this);
    this.checkNameAvailability = new CheckNameAvailabilityImpl(this);
    this.diagnostics = new DiagnosticsImpl(this);
    this.discoverySolution = new DiscoverySolutionImpl(this);
    this.solution = new SolutionImpl(this);
    this.simplifiedSolutions = new SimplifiedSolutionsImpl(this);
    this.troubleshooters = new TroubleshootersImpl(this);
    this.solutionSelfHelp = new SolutionSelfHelpImpl(this);
    this.discoverySolutionNLPTenantScope =
      new DiscoverySolutionNLPTenantScopeImpl(this);
    this.discoverySolutionNLPSubscriptionScope =
      new DiscoverySolutionNLPSubscriptionScopeImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest,
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      },
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  operations: Operations;
  checkNameAvailability: CheckNameAvailability;
  diagnostics: Diagnostics;
  discoverySolution: DiscoverySolution;
  solution: Solution;
  simplifiedSolutions: SimplifiedSolutions;
  troubleshooters: Troubleshooters;
  solutionSelfHelp: SolutionSelfHelp;
  discoverySolutionNLPTenantScope: DiscoverySolutionNLPTenantScope;
  discoverySolutionNLPSubscriptionScope: DiscoverySolutionNLPSubscriptionScope;
}
