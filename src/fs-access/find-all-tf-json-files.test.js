// MOCKS

// DUMMYDATA
const dummydata = require("@dummydata/")(__filename);
// IMPORTS

// CODE2TEST
const findAllTFJSONFiles = require("./find-all-tf-json-files");

const findAllTFJSONFilesTest = () => {
  const allFIles = findAllTFJSONFiles(dummydata.path);

  const arrayExpected = JSON.stringify(dummydata.data);
  const allFilesToString = JSON.stringify(allFIles);

  expect(arrayExpected).toBe(allFilesToString);
};

const tdd = () => {
  test(
    "List all .tf.json files form a given directory",
    findAllTFJSONFilesTest
  );
};

describe("find-all-tf-json-files", tdd);
