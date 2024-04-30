/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      isDataAction: {
        serializedName: "isDataAction",
        readOnly: true,
        type: {
          name: "Boolean",
        },
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay",
        },
      },
      origin: {
        serializedName: "origin",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      actionType: {
        serializedName: "actionType",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail",
        },
      },
    },
  },
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail",
            },
          },
        },
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo",
            },
          },
        },
      },
    },
  },
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } },
        },
      },
    },
  },
};

export const StandbyContainerGroupPoolResourceListResult: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "StandbyContainerGroupPoolResourceListResult",
      modelProperties: {
        value: {
          serializedName: "value",
          required: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "StandbyContainerGroupPoolResource",
              },
            },
          },
        },
        nextLink: {
          serializedName: "nextLink",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const StandbyContainerGroupPoolResourceProperties: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "StandbyContainerGroupPoolResourceProperties",
      modelProperties: {
        elasticityProfile: {
          serializedName: "elasticityProfile",
          type: {
            name: "Composite",
            className: "StandbyContainerGroupPoolElasticityProfile",
          },
        },
        containerGroupProperties: {
          serializedName: "containerGroupProperties",
          type: {
            name: "Composite",
            className: "ContainerGroupProperties",
          },
        },
        provisioningState: {
          serializedName: "provisioningState",
          readOnly: true,
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const StandbyContainerGroupPoolElasticityProfile: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "StandbyContainerGroupPoolElasticityProfile",
      modelProperties: {
        maxReadyCapacity: {
          constraints: {
            InclusiveMaximum: 2000,
            InclusiveMinimum: 0,
          },
          serializedName: "maxReadyCapacity",
          required: true,
          type: {
            name: "Number",
          },
        },
        refillPolicy: {
          serializedName: "refillPolicy",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const ContainerGroupProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContainerGroupProperties",
    modelProperties: {
      containerGroupProfile: {
        serializedName: "containerGroupProfile",
        type: {
          name: "Composite",
          className: "ContainerGroupProfile",
        },
      },
      subnetIds: {
        serializedName: "subnetIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Subnet",
            },
          },
        },
      },
    },
  },
};

export const ContainerGroupProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContainerGroupProfile",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String",
        },
      },
      revision: {
        serializedName: "revision",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const Subnet: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Subnet",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData",
        },
      },
    },
  },
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String",
        },
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String",
        },
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime",
        },
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String",
        },
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String",
        },
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime",
        },
      },
    },
  },
};

export const StandbyVirtualMachinePoolResourceListResult: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "StandbyVirtualMachinePoolResourceListResult",
      modelProperties: {
        value: {
          serializedName: "value",
          required: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "StandbyVirtualMachinePoolResource",
              },
            },
          },
        },
        nextLink: {
          serializedName: "nextLink",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const StandbyVirtualMachinePoolResourceProperties: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "StandbyVirtualMachinePoolResourceProperties",
      modelProperties: {
        elasticityProfile: {
          serializedName: "elasticityProfile",
          type: {
            name: "Composite",
            className: "StandbyVirtualMachinePoolElasticityProfile",
          },
        },
        virtualMachineState: {
          serializedName: "virtualMachineState",
          required: true,
          type: {
            name: "String",
          },
        },
        attachedVirtualMachineScaleSetId: {
          serializedName: "attachedVirtualMachineScaleSetId",
          type: {
            name: "String",
          },
        },
        provisioningState: {
          serializedName: "provisioningState",
          readOnly: true,
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const StandbyVirtualMachinePoolElasticityProfile: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "StandbyVirtualMachinePoolElasticityProfile",
      modelProperties: {
        maxReadyCapacity: {
          constraints: {
            InclusiveMaximum: 2000,
            InclusiveMinimum: 0,
          },
          serializedName: "maxReadyCapacity",
          required: true,
          type: {
            name: "Number",
          },
        },
      },
    },
  };

export const StandbyContainerGroupPoolResourceUpdate: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "StandbyContainerGroupPoolResourceUpdate",
      modelProperties: {
        tags: {
          serializedName: "tags",
          type: {
            name: "Dictionary",
            value: { type: { name: "String" } },
          },
        },
        properties: {
          serializedName: "properties",
          type: {
            name: "Composite",
            className: "StandbyContainerGroupPoolResourceUpdateProperties",
          },
        },
      },
    },
  };

export const StandbyContainerGroupPoolResourceUpdateProperties: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "StandbyContainerGroupPoolResourceUpdateProperties",
      modelProperties: {
        elasticityProfile: {
          serializedName: "elasticityProfile",
          type: {
            name: "Composite",
            className: "StandbyContainerGroupPoolElasticityProfileUpdate",
          },
        },
        containerGroupProperties: {
          serializedName: "containerGroupProperties",
          type: {
            name: "Composite",
            className: "ContainerGroupPropertiesUpdate",
          },
        },
      },
    },
  };

export const StandbyContainerGroupPoolElasticityProfileUpdate: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "StandbyContainerGroupPoolElasticityProfileUpdate",
      modelProperties: {
        maxReadyCapacity: {
          constraints: {
            InclusiveMaximum: 2000,
            InclusiveMinimum: 0,
          },
          serializedName: "maxReadyCapacity",
          type: {
            name: "Number",
          },
        },
        refillPolicy: {
          serializedName: "refillPolicy",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const ContainerGroupPropertiesUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContainerGroupPropertiesUpdate",
    modelProperties: {
      containerGroupProfile: {
        serializedName: "containerGroupProfile",
        type: {
          name: "Composite",
          className: "ContainerGroupProfileUpdate",
        },
      },
      subnetIds: {
        serializedName: "subnetIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Subnet",
            },
          },
        },
      },
    },
  },
};

export const ContainerGroupProfileUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContainerGroupProfileUpdate",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String",
        },
      },
      revision: {
        serializedName: "revision",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const StandbyVirtualMachinePoolResourceUpdate: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "StandbyVirtualMachinePoolResourceUpdate",
      modelProperties: {
        tags: {
          serializedName: "tags",
          type: {
            name: "Dictionary",
            value: { type: { name: "String" } },
          },
        },
        properties: {
          serializedName: "properties",
          type: {
            name: "Composite",
            className: "StandbyVirtualMachinePoolResourceUpdateProperties",
          },
        },
      },
    },
  };

export const StandbyVirtualMachinePoolResourceUpdateProperties: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "StandbyVirtualMachinePoolResourceUpdateProperties",
      modelProperties: {
        elasticityProfile: {
          serializedName: "elasticityProfile",
          type: {
            name: "Composite",
            className: "StandbyVirtualMachinePoolElasticityProfileUpdate",
          },
        },
        virtualMachineState: {
          serializedName: "virtualMachineState",
          type: {
            name: "String",
          },
        },
        attachedVirtualMachineScaleSetId: {
          serializedName: "attachedVirtualMachineScaleSetId",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const StandbyVirtualMachinePoolElasticityProfileUpdate: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "StandbyVirtualMachinePoolElasticityProfileUpdate",
      modelProperties: {
        maxReadyCapacity: {
          constraints: {
            InclusiveMaximum: 2000,
            InclusiveMinimum: 0,
          },
          serializedName: "maxReadyCapacity",
          type: {
            name: "Number",
          },
        },
      },
    },
  };

export const StandbyVirtualMachineResourceListResult: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "StandbyVirtualMachineResourceListResult",
      modelProperties: {
        value: {
          serializedName: "value",
          required: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "StandbyVirtualMachineResource",
              },
            },
          },
        },
        nextLink: {
          serializedName: "nextLink",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const StandbyVirtualMachineResourceProperties: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "StandbyVirtualMachineResourceProperties",
      modelProperties: {
        virtualMachineResourceId: {
          serializedName: "virtualMachineResourceId",
          required: true,
          type: {
            name: "String",
          },
        },
        provisioningState: {
          serializedName: "provisioningState",
          readOnly: true,
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ProxyResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties,
    },
  },
};

export const StandbyContainerGroupPoolResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StandbyContainerGroupPoolResource",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "StandbyContainerGroupPoolResourceProperties",
        },
      },
    },
  },
};

export const StandbyVirtualMachinePoolResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StandbyVirtualMachinePoolResource",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "StandbyVirtualMachinePoolResourceProperties",
        },
      },
    },
  },
};

export const StandbyVirtualMachineResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StandbyVirtualMachineResource",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "StandbyVirtualMachineResourceProperties",
        },
      },
    },
  },
};

export const StandbyContainerGroupPoolsCreateOrUpdateHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "StandbyContainerGroupPoolsCreateOrUpdateHeaders",
      modelProperties: {
        retryAfter: {
          serializedName: "retry-after",
          type: {
            name: "Number",
          },
        },
      },
    },
  };

export const StandbyContainerGroupPoolsDeleteHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "StandbyContainerGroupPoolsDeleteHeaders",
      modelProperties: {
        location: {
          serializedName: "location",
          type: {
            name: "String",
          },
        },
        retryAfter: {
          serializedName: "retry-after",
          type: {
            name: "Number",
          },
        },
      },
    },
  };

export const StandbyVirtualMachinePoolsCreateOrUpdateHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "StandbyVirtualMachinePoolsCreateOrUpdateHeaders",
      modelProperties: {
        retryAfter: {
          serializedName: "retry-after",
          type: {
            name: "Number",
          },
        },
      },
    },
  };

export const StandbyVirtualMachinePoolsDeleteHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "StandbyVirtualMachinePoolsDeleteHeaders",
      modelProperties: {
        location: {
          serializedName: "location",
          type: {
            name: "String",
          },
        },
        retryAfter: {
          serializedName: "retry-after",
          type: {
            name: "Number",
          },
        },
      },
    },
  };
