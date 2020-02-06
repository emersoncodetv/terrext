// MOCKS

// DUMMYDATA
const dummydata = require("@dummydata")(__filename);
// IMPORTS

// CODE2TEST
const isDirectory = require("./is-directory");

const isDirectoryTest = () => {
  expect(true).toBe(isDirectory(dummydata.path, "level-1-A"));
  expect(false).toBe(isDirectory(dummydata.path, "root.tf.json"));
};

const tdd = () => {
  test("Valida si el path dado corresponde a un directorio", isDirectoryTest);
};

describe("is-directory", tdd);
