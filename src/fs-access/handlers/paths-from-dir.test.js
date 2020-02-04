const path = require("path");

const simulatedPaths = require("../../../__dummydata__/simulated-paths");

const directoryPath = path.resolve(
  __dirname,
  "../../../__dummydata__/dummy-project-tf"
);

const pathsFromDir = require("./paths-from-dir");

test("paths-from-dir Obtiene todos los elementos de un directorio", () => {
  const paths = pathsFromDir(directoryPath);
  expect(JSON.stringify(simulatedPaths.raw)).toBe(JSON.stringify(paths));
});
