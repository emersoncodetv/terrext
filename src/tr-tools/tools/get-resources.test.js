const findResources = require("./get-resources");

const dummydata = require("@dummydata/expected-resources");

const findResourcesTest = () => {
  const received = findResources({ file: dummydata.path });
  const receivedStringify = JSON.stringify(received);
  expect(receivedStringify).toBe(dummydata.expected);
};

const tdd = () => {
  test("", findResourcesTest);
};

describe("get-resources", tdd);
