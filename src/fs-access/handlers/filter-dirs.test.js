// MOCKS

// DUMMYDATA
const dummydata = require("@dummydata")(__filename);
// IMPORTS

// CODE2TEST
const filterDirs = require("./filter-dirs");

const filterDirsTest = () => {
  const dirs = filterDirs(dummydata.path, dummydata.raw);
  const received = JSON.stringify(dummydata.dirs);
  const expected = JSON.stringify(dirs);
  expect(received).toBe(expected);
};

const tdd = () => {
  test("Filtrar y solo dejar los directorios", filterDirsTest);
};

describe("filter-dirs", tdd);
