const path = require("path");

const simulatedPaths = require("../../../__datasimulated__/simulated-paths");

const directoryPath = path.resolve(
  __dirname,
  "../../../__datasimulated__/dummy-project-tf"
);

const pathsFromDir = require("./paths-from-dir");

test("Obtiene todos los elementos de un directorio", () => {
  const paths = pathsFromDir(directoryPath);
  expect(JSON.stringify(simulatedPaths.raw)).toBe(JSON.stringify(paths));
});
