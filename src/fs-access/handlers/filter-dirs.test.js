const path = require("path");

const filterDirs = require("./filter-dirs");
const simulatedPaths = require("../../../__dummydata__/simulated-paths");

const directoryPath = path.resolve(
  __dirname,
  "../../../__dummydata__/dummy-project-tf"
);

const filterDirsTest = () => {
  const dirs = filterDirs(directoryPath, simulatedPaths.raw);
  const received = JSON.stringify(simulatedPaths.dirs);
  const expected = JSON.stringify(dirs);
  expect(received).toBe(expected);
};

const tdd = () => {
  test("Filtrar y solo dejar los directorios", filterDirsTest);
};

describe("filter-dirs", tdd);
