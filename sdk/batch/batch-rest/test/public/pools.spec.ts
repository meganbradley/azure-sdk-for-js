// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Recorder, isPlaybackMode } from "@azure-tools/test-recorder";
import { assert } from "chai";
import { createBatchClient, createRecorder } from "./utils/recordedClient";
import { Context } from "mocha";
import { BatchPool, BatchServiceClient, isUnexpected, paginate, PoolAddParameters, PoolGetParameters, PoolUpdatePropertiesParameters } from "../../src";
import { fakeTestPasswordPlaceholder1 } from "./utils/fakeTestSecrets";
import { wait } from "./utils/wait";
import { fail } from "assert";
import { getResourceName, LONG_TEST_TIMEOUT, POLLING_INTERVAL } from "./utils/helpers";

const BASIC_POOL = getResourceName("Pool-Basic");
const VMSIZE_D1 = "Standard_D1_v2";
const VMSIZE_A1 = "Standard_A1_v2";
const BASIC_POOL_NUM_VMS = 4;
const DISK_POOL = getResourceName("Pool-Datadisk");
const ENDPOINT_POOL = getResourceName("Pool-Endpoint");
const certThumb = "cff2ab63c8c955aaf71989efa641b906558d9fb7";
const certAlgorithm = "sha1";

describe("Pool Operations Test", () => {
  let recorder: Recorder;
  let batchClient: BatchServiceClient;

  let nonAdminPoolUser: string = "nonAdminUser";

  /**
   * Provision helper resources needed for testing pools
   */
  // before(async function () {
  // const batchClient = createBatchClient("AAD");

  // const cert: CertificatesAddParameters = {
  //       body: {thumbprint: certThumb,
  //       thumbprintAlgorithm: certAlgorithm,
  //       password: "nodesdk",
  //       certificateFormat: "pfx",
  //       data:
  //         "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"
  //     },
  //     contentType: "application/json; odata=minimalmetadata"
  //   };

  //   const certResponse = await batchClient.path("/certificates").post(cert);
  //   if (isUnexpected(certResponse)) {
  //       fail(`Received unexpected status code from creating certificate: ${certResponse.status}
  //             Unable to provision resource needed for Pool Testing`)
  //     }
  // })

  /**
   * Unprovision helper resources after all tests ran
   */
  // after(async function () {
  // const batchClient = createBatchClient("AAD");

  //   const certResponse = await batchClient.path("/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})", certAlgorithm, certThumb).delete();
  //   if (isUnexpected(certResponse)) {
  //       fail(`Received unexpected status code from deleting certificate: ${certResponse.status}. Certificate Resource Leaked`);
  //     }

  //     let routePath = "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})";
  //     routePath.replace
  // })

  beforeEach(async function (this: Context) {
    recorder = await createRecorder(this);
    batchClient = createBatchClient("AAD", recorder);
  });

  afterEach(async function () {
    await recorder.stop();
  });


  it("Create Batch Pool successfully", async function () {
    // Use assert to test your assumptions

    const poolParams: PoolAddParameters = {
      body: {
        id: recorder.variable("BASIC_POOL", BASIC_POOL),
        vmSize: VMSIZE_D1,
        cloudServiceConfiguration: { osFamily: "4" },
        targetDedicatedNodes: BASIC_POOL_NUM_VMS,
        // Ensures there's a compute node file we can reference later
        startTask: { commandLine: "cmd /c echo hello > hello.txt" },
        // Sets up pool user we can reference later
        userAccounts: [
          {
            name: nonAdminPoolUser,
            password: isPlaybackMode() ? fakeTestPasswordPlaceholder1 : "user_1account_password2",    //Recorder sanitizer options will replace password with fakeTestPasswordPlaceholder1
            elevationLevel: "nonadmin"
          }
        ]
      },
      contentType: "application/json; odata=minimalmetadata"

    }

    const result = await batchClient.path("/pools").post(poolParams);
    assert.equal(result.status, "201");

    await wait(20000);


  });

  it("should patch pool parameters successfully", async () => {
    const options: BatchPool = {
      metadata: [
        {
          name: "foo2",
          value: "bar2"
        }
      ]
    };

    const poolId = recorder.variable("BASIC_POOL", BASIC_POOL);

    const patchResult = await batchClient.path("/pools/{poolId}", poolId).patch({ body: options, contentType: "application/json; odata=minimalmetadata" })
    assert.equal(patchResult.status, "200");

    const getResult = await batchClient.path("/pools/{poolId}", poolId).get();
    if (isUnexpected(getResult)) {
      fail(`Received unexpected status code from getting pool: ${getResult.status}
              Response Body: ${getResult.body.error.message}`)
    }

    assert.equal(getResult.body.id, poolId);
    assert.equal(getResult.body.state, "active");

    for (let index = 0; index < options.metadata!.length; index++) {
      assert.equal(getResult.body.metadata![index].name, options.metadata![index].name);
      assert.equal(getResult.body.metadata![index].value, options.metadata![index].value);
    }

  });

  it("should get a pool reference successfully", async () => {
    let getResult: any;
    let metadata: any;
    const poolId = recorder.variable("BASIC_POOL", BASIC_POOL);

    const promise = new Promise<void>((resolve) => {
      const timeout = setInterval(async () => {
        getResult = await batchClient.path("/pools/{poolId}", poolId).get();
        if (isUnexpected(getResult)) {
          fail(`Received unexpected status code from getting pool: ${getResult.status}
              Response Body: ${getResult.body.error.message}`)
        }
        metadata = getResult.body.metadata![0];
        if (getResult.body.allocationState === "steady") {
          resolve();
          clearTimeout(timeout);
        }
      }, POLLING_INTERVAL);
    });

    await promise;

    assert.equal(getResult.body.id, poolId);
    assert.equal(getResult.body.state, "active");
    assert.equal(getResult.body.allocationState, "steady");
    assert.isDefined(getResult.body.cloudServiceConfiguration);
    assert.equal(getResult.body.cloudServiceConfiguration!.osFamily, "4");
    assert.equal(getResult.body.vmSize.toLowerCase(), VMSIZE_D1.toLowerCase());
    assert.equal(getResult.body.targetDedicatedNodes, BASIC_POOL_NUM_VMS);
    assert.isFalse(getResult.body.enableAutoScale);

    assert.equal(metadata.name, "foo2");
    assert.equal(metadata.value, "bar2");

    assert.isDefined(getResult.body.startTask);
    assert.equal(getResult.body.startTask!.commandLine, "cmd /c echo hello > hello.txt");

    assert.lengthOf(getResult.body.userAccounts!, 1);
    assert.equal(getResult.body.userAccounts![0].name, nonAdminPoolUser);
    assert.equal(getResult.body.userAccounts![0].elevationLevel, "nonadmin");
  }).timeout(LONG_TEST_TIMEOUT);

  it("should update pool parameters successfully", async function () {
    const updateOptions: PoolUpdatePropertiesParameters = {
      body: {
        metadata: [{ name: "foo", value: "bar" }],
        certificateReferences: [],
        applicationPackageReferences: [],
        // Ensures the start task isn't cleared
        startTask: { commandLine: "cmd /c echo hello > hello.txt" },
      },
      contentType: "application/json; odata=minimalmetadata"
    };

    const poolId = recorder.variable("BASIC_POOL", BASIC_POOL);

    const updateResult = await batchClient.path("/pools/{poolId}/updateproperties", poolId).post(updateOptions);
    assert.equal(updateResult.status, "204");

    const getResult = await batchClient.path("/pools/{poolId}", poolId).get();
    if (isUnexpected(getResult)) {
      fail(`Received unexpected status code from getting pool: ${getResult.status}
              Response Body: ${getResult.body.error.message}`)
    }

    let metadata = getResult.body.metadata!;
    assert.equal(metadata[0].name, "foo");
    assert.equal(metadata[0].value, "bar");
  });

  it("should get a pool reference with odata successfully", async () => {
    const getOptions: PoolGetParameters = {
      queryParameters: {
        $select: "id,state",
        $expand: "stats"
      }
    };

    const poolId = recorder.variable("BASIC_POOL", BASIC_POOL);

    const getResult = await batchClient.path("/pools/{poolId}", poolId).get(getOptions);
    if (isUnexpected(getResult)) {
      fail(`Received unexpected status code from getting pool: ${getResult.status}
              Response Body: ${getResult.body.error.message}`)
    }

    assert.equal(getResult.body.id, poolId);
    assert.equal(getResult.body.state, "active");
    assert.isUndefined(getResult.body.allocationState);
    assert.isUndefined(getResult.body.vmSize);
  });

  it("should add a pool with a Data Disk", async () => {
    const poolParams: PoolAddParameters = {
      body: {
        id: recorder.variable("DISK_POOL", DISK_POOL),
        vmSize: VMSIZE_A1,
        virtualMachineConfiguration: {
          imageReference: {
            publisher: "Canonical",
            offer: "UbuntuServer",
            sku: "18.04-LTS"
          },
          nodeAgentSKUId: "batch.node.ubuntu 18.04",
          dataDisks: [
            {
              lun: 1,
              diskSizeGB: 50
            }
          ]
        },
        targetDedicatedNodes: 0
      },
      contentType: "application/json; odata=minimalmetadata"
    };

    const result = await batchClient.path("/pools").post(poolParams);
    assert.equal(result.status, "201");

    await wait(POLLING_INTERVAL);

    const getResult = await batchClient.path("/pools/{poolId}", poolParams.body.id!).get();
    if (isUnexpected(getResult)) {
      fail(`Received unexpected status code from getting pool: ${getResult.status}
              Response Body: ${getResult.body.error.message}`)
    }

    assert.equal(getResult.body.virtualMachineConfiguration!.dataDisks![0].lun, 1);
    assert.equal(getResult.body.virtualMachineConfiguration!.dataDisks![0].diskSizeGB, 50);

    await batchClient.path("/pools/{poolId}", poolParams.body.id!).delete();
  });

  it("should add a pool with inbound endpoint configuration successfully", async () => {
    const pool: PoolAddParameters = {
      body: {
        id: recorder.variable("ENDPOINT_POOL", ENDPOINT_POOL),
        vmSize: VMSIZE_A1,
        networkConfiguration: {
          endpointConfiguration: {
            inboundNATPools: [
              {
                name: "TestEndpointConfig",
                protocol: "udp",
                backendPort: 64444,
                frontendPortRangeStart: 60000,
                frontendPortRangeEnd: 61000,
                networkSecurityGroupRules: [
                  {
                    priority: 150,
                    access: "allow",
                    sourceAddressPrefix: "*"
                  }
                ]
              }
            ]
          }
        },
        virtualMachineConfiguration: {
          nodeAgentSKUId: "batch.node.ubuntu 18.04",
          imageReference: {
            publisher: "Canonical",
            offer: "UbuntuServer",
            sku: "18.04-LTS"
          }
        },
        targetDedicatedNodes: 1
      },
      contentType: "application/json; odata=minimalmetadata"
    };

    const addResult = await batchClient.path("/pools").post(pool);
    assert.equal(addResult.status, "201");

  });

  it("should get the details of a pool with endpoint configuration successfully", async () => {
    let nodeList = [];
    const poolId = recorder.variable("ENDPOINT_POOL", ENDPOINT_POOL)
    while (true) {
      nodeList = [];
      let listResult = await batchClient.path("/pools/{poolId}/nodes", poolId).get();

      if (isUnexpected(listResult)) {
        fail(`Received unexpected status code from list compute nodes: ${listResult.status}
              Response Body: ${listResult.body.error.message}`)
      }

      let paginateResponse = paginate(batchClient, listResult);
      for await (const node of paginateResponse) {
        nodeList.push(node)
      }
      if (nodeList.length > 0) {
        break;
      } else {
        await wait(POLLING_INTERVAL);
      }
    }

    assert.lengthOf(nodeList, 1);
    assert.isDefined(nodeList[0].endpointConfiguration);
    assert.lengthOf(nodeList[0].endpointConfiguration!.inboundEndpoints, 2);
    assert.equal(
      nodeList[0].endpointConfiguration!.inboundEndpoints[0].name,
      "TestEndpointConfig.0"
    );
    assert.equal(nodeList[0].endpointConfiguration!.inboundEndpoints[0].protocol, "udp");
  }).timeout(LONG_TEST_TIMEOUT);


  it("should get pool node counts successfully", async () => {
    let poolList = [];
    let endpointPool;
    const poolId = recorder.variable("ENDPOINT_POOL", ENDPOINT_POOL);
    while (true) {
      poolList = [];
      let listNodeCountResult = await batchClient.path("/nodecounts").get();
      if (isUnexpected(listNodeCountResult)) {
        fail(`Received unexpected status code from list compute nodes: ${listNodeCountResult.status}
              Response Body: ${listNodeCountResult.body.error.message}`)
      }

      let paginateResponse = paginate(batchClient, listNodeCountResult);
      for await (const pool of paginateResponse) {
        poolList.push(pool)
      }

      if (poolList.length > 0) {
        endpointPool = poolList.filter(pool => pool.poolId == poolId);
        if (endpointPool.length > 0 && endpointPool[0].dedicated!.idle > 0) {
          break;
        }
      } else {
        await wait(POLLING_INTERVAL);
      }
    }

    const endpointPoolObj = poolList.filter(pool => pool.poolId == poolId);
    assert.isAbove(endpointPoolObj.length, 0, `Pool with Pool Id ${poolId} not found`);
    assert.equal(endpointPoolObj[0].dedicated!.idle, 1);
    assert.equal(endpointPool[0].lowPriority!.total, 0);

  }).timeout(LONG_TEST_TIMEOUT);

  it("should delete a pool successfully", async function () {
    const deleteResult = await batchClient.path("/pools/{poolId}", recorder.variable("BASIC_POOL", BASIC_POOL)).delete();
    assert.equal(deleteResult.status, "202");
  });

  it("should delete a second pool successfully", async function () {
    const deleteResult = await batchClient.path("/pools/{poolId}", recorder.variable("ENDPOINT_POOL", ENDPOINT_POOL)).delete();
    assert.equal(deleteResult.status, "202");
  });
});
