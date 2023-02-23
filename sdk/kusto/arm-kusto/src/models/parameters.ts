/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  Cluster as ClusterMapper,
  ClusterUpdate as ClusterUpdateMapper,
  FollowerDatabaseDefinition as FollowerDatabaseDefinitionMapper,
  ClusterCheckNameRequest as ClusterCheckNameRequestMapper,
  LanguageExtensionsList as LanguageExtensionsListMapper,
  ClusterPrincipalAssignmentCheckNameRequest as ClusterPrincipalAssignmentCheckNameRequestMapper,
  ClusterPrincipalAssignment as ClusterPrincipalAssignmentMapper,
  CheckNameRequest as CheckNameRequestMapper,
  Database as DatabaseMapper,
  DatabasePrincipalListRequest as DatabasePrincipalListRequestMapper,
  AttachedDatabaseConfigurationsCheckNameRequest as AttachedDatabaseConfigurationsCheckNameRequestMapper,
  AttachedDatabaseConfiguration as AttachedDatabaseConfigurationMapper,
  ManagedPrivateEndpointsCheckNameRequest as ManagedPrivateEndpointsCheckNameRequestMapper,
  ManagedPrivateEndpoint as ManagedPrivateEndpointMapper,
  DatabasePrincipalAssignmentCheckNameRequest as DatabasePrincipalAssignmentCheckNameRequestMapper,
  DatabasePrincipalAssignment as DatabasePrincipalAssignmentMapper,
  Script as ScriptMapper,
  ScriptCheckNameRequest as ScriptCheckNameRequestMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  DataConnectionValidation as DataConnectionValidationMapper,
  DataConnectionCheckNameRequest as DataConnectionCheckNameRequestMapper,
  DataConnection as DataConnectionMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const clusterName: OperationURLParameter = {
  parameterPath: "clusterName",
  mapper: {
    serializedName: "clusterName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-12-29",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: ClusterMapper
};

export const ifMatch: OperationParameter = {
  parameterPath: ["options", "ifMatch"],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};

export const ifNoneMatch: OperationParameter = {
  parameterPath: ["options", "ifNoneMatch"],
  mapper: {
    serializedName: "If-None-Match",
    type: {
      name: "String"
    }
  }
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: ClusterUpdateMapper
};

export const followerDatabaseToRemove: OperationParameter = {
  parameterPath: "followerDatabaseToRemove",
  mapper: FollowerDatabaseDefinitionMapper
};

export const clusterName1: OperationParameter = {
  parameterPath: "clusterName",
  mapper: ClusterCheckNameRequestMapper
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const languageExtensionsToAdd: OperationParameter = {
  parameterPath: "languageExtensionsToAdd",
  mapper: LanguageExtensionsListMapper
};

export const languageExtensionsToRemove: OperationParameter = {
  parameterPath: "languageExtensionsToRemove",
  mapper: LanguageExtensionsListMapper
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const principalAssignmentName: OperationParameter = {
  parameterPath: "principalAssignmentName",
  mapper: ClusterPrincipalAssignmentCheckNameRequestMapper
};

export const principalAssignmentName1: OperationURLParameter = {
  parameterPath: "principalAssignmentName",
  mapper: {
    serializedName: "principalAssignmentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: ClusterPrincipalAssignmentMapper
};

export const resourceName: OperationParameter = {
  parameterPath: "resourceName",
  mapper: CheckNameRequestMapper
};

export const databaseName: OperationURLParameter = {
  parameterPath: "databaseName",
  mapper: {
    serializedName: "databaseName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: DatabaseMapper
};

export const callerRole: OperationQueryParameter = {
  parameterPath: ["options", "callerRole"],
  mapper: {
    defaultValue: "Admin",
    serializedName: "callerRole",
    type: {
      name: "String"
    }
  }
};

export const databasePrincipalsToAdd: OperationParameter = {
  parameterPath: "databasePrincipalsToAdd",
  mapper: DatabasePrincipalListRequestMapper
};

export const databasePrincipalsToRemove: OperationParameter = {
  parameterPath: "databasePrincipalsToRemove",
  mapper: DatabasePrincipalListRequestMapper
};

export const resourceName1: OperationParameter = {
  parameterPath: "resourceName",
  mapper: AttachedDatabaseConfigurationsCheckNameRequestMapper
};

export const attachedDatabaseConfigurationName: OperationURLParameter = {
  parameterPath: "attachedDatabaseConfigurationName",
  mapper: {
    serializedName: "attachedDatabaseConfigurationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: AttachedDatabaseConfigurationMapper
};

export const resourceName2: OperationParameter = {
  parameterPath: "resourceName",
  mapper: ManagedPrivateEndpointsCheckNameRequestMapper
};

export const managedPrivateEndpointName: OperationURLParameter = {
  parameterPath: "managedPrivateEndpointName",
  mapper: {
    serializedName: "managedPrivateEndpointName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: ManagedPrivateEndpointMapper
};

export const principalAssignmentName2: OperationParameter = {
  parameterPath: "principalAssignmentName",
  mapper: DatabasePrincipalAssignmentCheckNameRequestMapper
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: DatabasePrincipalAssignmentMapper
};

export const scriptName: OperationURLParameter = {
  parameterPath: "scriptName",
  mapper: {
    serializedName: "scriptName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: ScriptMapper
};

export const scriptName1: OperationParameter = {
  parameterPath: "scriptName",
  mapper: ScriptCheckNameRequestMapper
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters8: OperationParameter = {
  parameterPath: "parameters",
  mapper: PrivateEndpointConnectionMapper
};

export const privateLinkResourceName: OperationURLParameter = {
  parameterPath: "privateLinkResourceName",
  mapper: {
    serializedName: "privateLinkResourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters9: OperationParameter = {
  parameterPath: "parameters",
  mapper: DataConnectionValidationMapper
};

export const dataConnectionName: OperationParameter = {
  parameterPath: "dataConnectionName",
  mapper: DataConnectionCheckNameRequestMapper
};

export const dataConnectionName1: OperationURLParameter = {
  parameterPath: "dataConnectionName",
  mapper: {
    serializedName: "dataConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters10: OperationParameter = {
  parameterPath: "parameters",
  mapper: DataConnectionMapper
};

export const operationId: OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    serializedName: "operationId",
    required: true,
    type: {
      name: "String"
    }
  }
};
