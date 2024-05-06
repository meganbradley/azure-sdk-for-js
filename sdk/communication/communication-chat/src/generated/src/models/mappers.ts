/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const ChatMessageReadReceiptsCollection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatMessageReadReceiptsCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatMessageReadReceipt",
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

export const ChatMessageReadReceipt: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatMessageReadReceipt",
    modelProperties: {
      senderCommunicationIdentifier: {
        serializedName: "senderCommunicationIdentifier",
        type: {
          name: "Composite",
          className: "CommunicationIdentifierModel",
        },
      },
      chatMessageId: {
        serializedName: "chatMessageId",
        required: true,
        type: {
          name: "String",
        },
      },
      readOn: {
        serializedName: "readOn",
        required: true,
        type: {
          name: "DateTime",
        },
      },
    },
  },
};

export const CommunicationIdentifierModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationIdentifierModel",
    modelProperties: {
      kind: {
        serializedName: "kind",
        type: {
          name: "String",
        },
      },
      rawId: {
        serializedName: "rawId",
        type: {
          name: "String",
        },
      },
      communicationUser: {
        serializedName: "communicationUser",
        type: {
          name: "Composite",
          className: "CommunicationUserIdentifierModel",
        },
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        type: {
          name: "Composite",
          className: "PhoneNumberIdentifierModel",
        },
      },
      microsoftTeamsUser: {
        serializedName: "microsoftTeamsUser",
        type: {
          name: "Composite",
          className: "MicrosoftTeamsUserIdentifierModel",
        },
      },
      microsoftTeamsApp: {
        serializedName: "microsoftTeamsApp",
        type: {
          name: "Composite",
          className: "MicrosoftTeamsAppIdentifierModel",
        },
      },
    },
  },
};

export const CommunicationUserIdentifierModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationUserIdentifierModel",
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

export const PhoneNumberIdentifierModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumberIdentifierModel",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const MicrosoftTeamsUserIdentifierModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MicrosoftTeamsUserIdentifierModel",
    modelProperties: {
      userId: {
        serializedName: "userId",
        required: true,
        type: {
          name: "String",
        },
      },
      isAnonymous: {
        serializedName: "isAnonymous",
        type: {
          name: "Boolean",
        },
      },
      cloud: {
        serializedName: "cloud",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const MicrosoftTeamsAppIdentifierModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MicrosoftTeamsAppIdentifierModel",
    modelProperties: {
      appId: {
        serializedName: "appId",
        required: true,
        type: {
          name: "String",
        },
      },
      cloud: {
        serializedName: "cloud",
        type: {
          name: "String",
        },
      },
    },
  },
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
          className: "ChatError",
        },
      },
    },
  },
};

export const ChatError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatError",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String",
        },
      },
      message: {
        serializedName: "message",
        required: true,
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
              className: "ChatError",
            },
          },
        },
      },
      innerError: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "ChatError",
        },
      },
    },
  },
};

export const SendReadReceiptRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendReadReceiptRequest",
    modelProperties: {
      chatMessageId: {
        serializedName: "chatMessageId",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const SendChatMessageRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendChatMessageRequest",
    modelProperties: {
      content: {
        serializedName: "content",
        required: true,
        type: {
          name: "String",
        },
      },
      senderDisplayName: {
        serializedName: "senderDisplayName",
        type: {
          name: "String",
        },
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "text",
            "html",
            "topicUpdated",
            "participantAdded",
            "participantRemoved",
          ],
        },
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      attachments: {
        serializedName: "attachments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatAttachment",
            },
          },
        },
      },
    },
  },
};

export const ChatAttachment: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatAttachment",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String",
        },
      },
      attachmentType: {
        serializedName: "attachmentType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["image", "file"],
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      url: {
        serializedName: "url",
        type: {
          name: "String",
        },
      },
      previewUrl: {
        serializedName: "previewUrl",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const SendChatMessageResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendChatMessageResult",
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

export const ChatMessagesCollection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatMessagesCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatMessage",
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

export const ChatMessage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatMessage",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String",
        },
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "text",
            "html",
            "topicUpdated",
            "participantAdded",
            "participantRemoved",
          ],
        },
      },
      sequenceId: {
        serializedName: "sequenceId",
        required: true,
        type: {
          name: "String",
        },
      },
      version: {
        serializedName: "version",
        required: true,
        type: {
          name: "String",
        },
      },
      content: {
        serializedName: "content",
        type: {
          name: "Composite",
          className: "ChatMessageContent",
        },
      },
      senderDisplayName: {
        serializedName: "senderDisplayName",
        type: {
          name: "String",
        },
      },
      createdOn: {
        serializedName: "createdOn",
        required: true,
        type: {
          name: "DateTime",
        },
      },
      senderCommunicationIdentifier: {
        serializedName: "senderCommunicationIdentifier",
        type: {
          name: "Composite",
          className: "CommunicationIdentifierModel",
        },
      },
      deletedOn: {
        serializedName: "deletedOn",
        type: {
          name: "DateTime",
        },
      },
      editedOn: {
        serializedName: "editedOn",
        type: {
          name: "DateTime",
        },
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      policyViolation: {
        serializedName: "policyViolation",
        type: {
          name: "Composite",
          className: "PolicyViolation",
        },
      },
    },
  },
};

export const ChatMessageContent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatMessageContent",
    modelProperties: {
      message: {
        serializedName: "message",
        type: {
          name: "String",
        },
      },
      topic: {
        serializedName: "topic",
        type: {
          name: "String",
        },
      },
      participants: {
        serializedName: "participants",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatParticipant",
            },
          },
        },
      },
      attachments: {
        serializedName: "attachments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatAttachment",
            },
          },
        },
      },
      initiatorCommunicationIdentifier: {
        serializedName: "initiatorCommunicationIdentifier",
        type: {
          name: "Composite",
          className: "CommunicationIdentifierModel",
        },
      },
    },
  },
};

export const ChatParticipant: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatParticipant",
    modelProperties: {
      communicationIdentifier: {
        serializedName: "communicationIdentifier",
        type: {
          name: "Composite",
          className: "CommunicationIdentifierModel",
        },
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String",
        },
      },
      shareHistoryTime: {
        serializedName: "shareHistoryTime",
        type: {
          name: "DateTime",
        },
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
    },
  },
};

export const PolicyViolation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PolicyViolation",
    modelProperties: {
      state: {
        serializedName: "state",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["contentBlocked", "warning"],
        },
      },
    },
  },
};

export const UpdateChatMessageRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateChatMessageRequest",
    modelProperties: {
      content: {
        serializedName: "content",
        type: {
          name: "String",
        },
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      attachments: {
        serializedName: "attachments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatAttachment",
            },
          },
        },
      },
    },
  },
};

export const ChatParticipantsCollection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatParticipantsCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatParticipant",
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

export const AddChatParticipantsRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddChatParticipantsRequest",
    modelProperties: {
      participants: {
        serializedName: "participants",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatParticipant",
            },
          },
        },
      },
    },
  },
};

export const AddChatParticipantsResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddChatParticipantsResult",
    modelProperties: {
      invalidParticipants: {
        serializedName: "invalidParticipants",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatError",
            },
          },
        },
      },
    },
  },
};

export const CreateChatThreadRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateChatThreadRequest",
    modelProperties: {
      topic: {
        serializedName: "topic",
        required: true,
        type: {
          name: "String",
        },
      },
      participants: {
        serializedName: "participants",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatParticipant",
            },
          },
        },
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      retentionPolicy: {
        serializedName: "retentionPolicy",
        type: {
          name: "Composite",
          className: "ChatRetentionPolicy",
        },
      },
    },
  },
};

export const ChatRetentionPolicy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatRetentionPolicy",
    uberParent: "ChatRetentionPolicy",
    polymorphicDiscriminator: {
      serializedName: "kind",
      clientName: "kind",
    },
    modelProperties: {
      kind: {
        serializedName: "kind",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["threadCreationDate", "none"],
        },
      },
    },
  },
};

export const CreateChatThreadResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateChatThreadResult",
    modelProperties: {
      chatThread: {
        serializedName: "chatThread",
        type: {
          name: "Composite",
          className: "ChatThreadProperties",
        },
      },
      invalidParticipants: {
        serializedName: "invalidParticipants",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatError",
            },
          },
        },
      },
    },
  },
};

export const ChatThreadProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatThreadProperties",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String",
        },
      },
      topic: {
        serializedName: "topic",
        required: true,
        type: {
          name: "String",
        },
      },
      createdOn: {
        serializedName: "createdOn",
        required: true,
        type: {
          name: "DateTime",
        },
      },
      createdByCommunicationIdentifier: {
        serializedName: "createdByCommunicationIdentifier",
        type: {
          name: "Composite",
          className: "CommunicationIdentifierModel",
        },
      },
      deletedOn: {
        serializedName: "deletedOn",
        type: {
          name: "DateTime",
        },
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      retentionPolicy: {
        serializedName: "retentionPolicy",
        type: {
          name: "Composite",
          className: "ChatRetentionPolicy",
        },
      },
      messagingPolicy: {
        serializedName: "messagingPolicy",
        type: {
          name: "Composite",
          className: "MessagingPolicy",
        },
      },
    },
  },
};

export const MessagingPolicy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MessagingPolicy",
    modelProperties: {
      textOnlyChat: {
        serializedName: "textOnlyChat",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const ChatThreadsItemCollection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatThreadsItemCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatThreadItem",
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

export const ChatThreadItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatThreadItem",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String",
        },
      },
      topic: {
        serializedName: "topic",
        required: true,
        type: {
          name: "String",
        },
      },
      deletedOn: {
        serializedName: "deletedOn",
        type: {
          name: "DateTime",
        },
      },
      lastMessageReceivedOn: {
        serializedName: "lastMessageReceivedOn",
        readOnly: true,
        type: {
          name: "DateTime",
        },
      },
    },
  },
};

export const UpdateChatThreadRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateChatThreadRequest",
    modelProperties: {
      topic: {
        serializedName: "topic",
        type: {
          name: "String",
        },
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      retentionPolicy: {
        serializedName: "retentionPolicy",
        type: {
          name: "Composite",
          className: "ChatRetentionPolicy",
        },
      },
    },
  },
};

export const SendTypingNotificationRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendTypingNotificationRequest",
    modelProperties: {
      senderDisplayName: {
        serializedName: "senderDisplayName",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const UploadChatImageResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UploadChatImageResult",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String",
        },
      },
      attachmentType: {
        serializedName: "attachmentType",
        type: {
          name: "Enum",
          allowedValues: ["image", "file"],
        },
      },
      name: {
        serializedName: "name",
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
          className: "ErrorModel",
        },
      },
    },
  },
};

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String",
        },
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String",
        },
      },
      details: {
        serializedName: "details",
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
        required: true,
        type: {
          name: "String",
        },
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ThreadCreationDateRetentionPolicy: coreClient.CompositeMapper = {
  serializedName: "threadCreationDate",
  type: {
    name: "Composite",
    className: "ThreadCreationDateRetentionPolicy",
    uberParent: "ChatRetentionPolicy",
    polymorphicDiscriminator: ChatRetentionPolicy.type.polymorphicDiscriminator,
    modelProperties: {
      ...ChatRetentionPolicy.type.modelProperties,
      deleteThreadAfterDays: {
        serializedName: "deleteThreadAfterDays",
        required: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const NoneRetentionPolicy: coreClient.CompositeMapper = {
  serializedName: "none",
  type: {
    name: "Composite",
    className: "NoneRetentionPolicy",
    uberParent: "ChatRetentionPolicy",
    polymorphicDiscriminator: ChatRetentionPolicy.type.polymorphicDiscriminator,
    modelProperties: {
      ...ChatRetentionPolicy.type.modelProperties,
    },
  },
};

export let discriminators = {
  ChatRetentionPolicy: ChatRetentionPolicy,
  "ChatRetentionPolicy.threadCreationDate": ThreadCreationDateRetentionPolicy,
  "ChatRetentionPolicy.none": NoneRetentionPolicy,
};
