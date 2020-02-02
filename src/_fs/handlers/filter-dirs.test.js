const path = require("path");

const filterDirs = require("./filter-dirs");
const simulatedPaths = require("../../../__datasimulated__/simulated-paths");

const directoryPath = path.resolve(
  __dirname,
  "../../../__datasimulated__/dummy-project-tf"
);

test("Filtrar y solo dejar los directorios", () => {
  const dirs = filterDirs(simulatedPaths.raw, directoryPath);
  expect(JSON.stringify(simulatedPaths.dirs)).toBe(JSON.stringify(dirs));
});
