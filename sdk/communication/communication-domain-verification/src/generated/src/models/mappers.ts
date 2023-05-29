/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const CreateDomainOwnershipVerificationChallengeRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateDomainOwnershipVerificationChallengeRequest",
    modelProperties: {
      domain: {
        serializedName: "domain",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DomainOwnershipChallenge: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DomainOwnershipChallenge",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CommunicationErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "CommunicationError"
        }
      }
    }
  }
};

export const CommunicationError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationError",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CommunicationError"
            }
          }
        }
      },
      innerError: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "CommunicationError"
        }
      }
    }
  }
};

export const DomainOwnershipVerificationRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DomainOwnershipVerificationRequest",
    modelProperties: {
      domain: {
        serializedName: "domain",
        required: true,
        type: {
          name: "String"
        }
      },
      challengeType: {
        serializedName: "challengeType",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DomainOwnership: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DomainOwnership",
    modelProperties: {
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateDomainOwnershipChallengePostHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateDomainOwnershipChallengePostHeaders",
    modelProperties: {
      xMsRequestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateDomainOwnershipChallengePostExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateDomainOwnershipChallengePostExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VerifyDomainOwnershipPostHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VerifyDomainOwnershipPostHeaders",
    modelProperties: {
      xMsRequestId: {
        serializedName: "x-ms-request-id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VerifyDomainOwnershipPostExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VerifyDomainOwnershipPostExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};