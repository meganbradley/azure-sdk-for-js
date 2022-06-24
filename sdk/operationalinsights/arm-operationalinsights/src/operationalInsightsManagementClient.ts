/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  QueryPacksImpl,
  QueriesImpl,
  DataExportsImpl,
  DataSourcesImpl,
  IntelligencePacksImpl,
  LinkedServicesImpl,
  LinkedStorageAccountsImpl,
  ManagementGroupsImpl,
  OperationStatusesImpl,
  SharedKeysOperationsImpl,
  UsagesImpl,
  StorageInsightConfigsImpl,
  SavedSearchesImpl,
  AvailableServiceTiersImpl,
  GatewaysImpl,
  SchemaOperationsImpl,
  WorkspacePurgeImpl,
  ClustersImpl,
  OperationsImpl,
  WorkspacesImpl,
  DeletedWorkspacesImpl,
  TablesImpl
} from "./operations";
import {
  QueryPacks,
  Queries,
  DataExports,
  DataSources,
  IntelligencePacks,
  LinkedServices,
  LinkedStorageAccounts,
  ManagementGroups,
  OperationStatuses,
  SharedKeysOperations,
  Usages,
  StorageInsightConfigs,
  SavedSearches,
  AvailableServiceTiers,
  Gateways,
  SchemaOperations,
  WorkspacePurge,
  Clusters,
  Operations,
  Workspaces,
  DeletedWorkspaces,
  Tables
} from "./operationsInterfaces";
import { OperationalInsightsManagementClientOptionalParams } from "./models";

export class OperationalInsightsManagementClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the OperationalInsightsManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: OperationalInsightsManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: OperationalInsightsManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-operationalinsights/9.0.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      const bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
      if (!bearerTokenAuthenticationPolicyFound) {
        this.pipeline.removePolicy({
          name: coreRestPipeline.bearerTokenAuthenticationPolicyName
        });
        this.pipeline.addPolicy(
          coreRestPipeline.bearerTokenAuthenticationPolicy({
            scopes: `${optionsWithDefaults.baseUri}/.default`,
            challengeCallbacks: {
              authorizeRequestOnChallenge:
                coreClient.authorizeRequestOnClaimChallenge
            }
          })
        );
      }
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.queryPacks = new QueryPacksImpl(this);
    this.queries = new QueriesImpl(this);
    this.dataExports = new DataExportsImpl(this);
    this.dataSources = new DataSourcesImpl(this);
    this.intelligencePacks = new IntelligencePacksImpl(this);
    this.linkedServices = new LinkedServicesImpl(this);
    this.linkedStorageAccounts = new LinkedStorageAccountsImpl(this);
    this.managementGroups = new ManagementGroupsImpl(this);
    this.operationStatuses = new OperationStatusesImpl(this);
    this.sharedKeysOperations = new SharedKeysOperationsImpl(this);
    this.usages = new UsagesImpl(this);
    this.storageInsightConfigs = new StorageInsightConfigsImpl(this);
    this.savedSearches = new SavedSearchesImpl(this);
    this.availableServiceTiers = new AvailableServiceTiersImpl(this);
    this.gateways = new GatewaysImpl(this);
    this.schemaOperations = new SchemaOperationsImpl(this);
    this.workspacePurge = new WorkspacePurgeImpl(this);
    this.clusters = new ClustersImpl(this);
    this.operations = new OperationsImpl(this);
    this.workspaces = new WorkspacesImpl(this);
    this.deletedWorkspaces = new DeletedWorkspacesImpl(this);
    this.tables = new TablesImpl(this);
  }

  queryPacks: QueryPacks;
  queries: Queries;
  dataExports: DataExports;
  dataSources: DataSources;
  intelligencePacks: IntelligencePacks;
  linkedServices: LinkedServices;
  linkedStorageAccounts: LinkedStorageAccounts;
  managementGroups: ManagementGroups;
  operationStatuses: OperationStatuses;
  sharedKeysOperations: SharedKeysOperations;
  usages: Usages;
  storageInsightConfigs: StorageInsightConfigs;
  savedSearches: SavedSearches;
  availableServiceTiers: AvailableServiceTiers;
  gateways: Gateways;
  schemaOperations: SchemaOperations;
  workspacePurge: WorkspacePurge;
  clusters: Clusters;
  operations: Operations;
  workspaces: Workspaces;
  deletedWorkspaces: DeletedWorkspaces;
  tables: Tables;
}
