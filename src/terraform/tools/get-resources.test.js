// MOCKS

// DUMMYDATA
const dummydata = require("@dummydata/")(__filename);
// IMPORTS

// CODE2TEST
const findResources = require("./get-resources");

const findResourcesTest = () => {
  const received = findResources({ file: dummydata.path });
  const receivedStringify = JSON.stringify(received);
  expect(receivedStringify).toBe(dummydata.expected);
};

const tdd = () => {
  test("", findResourcesTest);
};

describe("get-resources", tdd);
