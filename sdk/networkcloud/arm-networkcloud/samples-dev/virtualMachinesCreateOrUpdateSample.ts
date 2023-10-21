/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { VirtualMachine, NetworkCloud } from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a new virtual machine or update the properties of the existing virtual machine.
 *
 * @summary Create a new virtual machine or update the properties of the existing virtual machine.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/stable/2023-07-01/examples/VirtualMachines_Create.json
 */
async function createOrUpdateVirtualMachine() {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] ||
    "123e4567-e89b-12d3-a456-426655440000";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const virtualMachineName = "virtualMachineName";
  const virtualMachineParameters: VirtualMachine = {
    adminUsername: "username",
    bootMethod: "UEFI",
    cloudServicesNetworkAttachment: {
      attachedNetworkId:
        "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/cloudServicesNetworks/cloudServicesNetworkName",
      ipAllocationMethod: "Dynamic"
    },
    cpuCores: 2,
    extendedLocation: {
      name:
        "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName",
      type: "CustomLocation"
    },
    location: "location",
    memorySizeGB: 8,
    networkAttachments: [
      {
        attachedNetworkId:
          "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/l3Networks/l3NetworkName",
        defaultGateway: "True",
        ipAllocationMethod: "Dynamic",
        ipv4Address: "198.51.100.1",
        ipv6Address: "2001:0db8:0000:0000:0000:0000:0000:0000",
        networkAttachmentName: "netAttachName01"
      }
    ],
    networkData: "bmV0d29ya0RhdGVTYW1wbGU=",
    placementHints: [
      {
        hintType: "Affinity",
        resourceId:
          "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/racks/rackName",
        schedulingExecution: "Hard",
        scope: ""
      }
    ],
    sshPublicKeys: [
      {
        keyData:
          "ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm"
      }
    ],
    storageProfile: {
      osDisk: {
        createOption: "Ephemeral",
        deleteOption: "Delete",
        diskSizeGB: 120
      },
      volumeAttachments: [
        "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/volumes/volumeName"
      ]
    },
    tags: { key1: "myvalue1", key2: "myvalue2" },
    userData: "dXNlckRhdGVTYW1wbGU=",
    vmDeviceModel: "T2",
    vmImage: "myacr.azurecr.io/foobar:latest",
    vmImageRepositoryCredentials: {
      password: "{password}",
      registryUrl: "myacr.azurecr.io",
      username: "myuser"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.virtualMachines.beginCreateOrUpdateAndWait(
    resourceGroupName,
    virtualMachineName,
    virtualMachineParameters
  );
  console.log(result);
}

async function main() {
  createOrUpdateVirtualMachine();
}

main().catch(console.error);
