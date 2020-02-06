// MOCKS

// DUMMYDATA
const dummydata = require("@dummydata")(__filename);
// IMPORTS

// CODE2TEST
const realPathsFromFiles = require("./real-paths-from-files");

const realPathsFromFilesTest = () => {
  const received = realPathsFromFiles(dummydata.path, dummydata.listOfFiles);
  const receivedStringify = JSON.stringify(received);
  expect(receivedStringify).toBe(dummydata.expected);
};

const tdd = () => {
  test("dummy", realPathsFromFilesTest);
};

describe("real-paths-from-files", tdd);
