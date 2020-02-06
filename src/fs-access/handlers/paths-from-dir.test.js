// MOCKS

// DUMMYDATA
const dummydata = require("@dummydata")(__filename);
// IMPORTS

// CODE2TEST
const pathsFromDir = require("./paths-from-dir");

const pathsFromDirTest = () => {
  const paths = pathsFromDir(dummydata.path);
  expect(JSON.stringify(dummydata.raw)).toBe(JSON.stringify(paths));
};

const tdd = () => {
  test("Obtiene todos los elementos de un directorio", pathsFromDirTest);
};

describe("paths-from-dir", tdd);
