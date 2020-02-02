const path = require("path");

const simulatedPaths = require("../../../__datasimulated__/simulated-paths");

const directoryPath = path.resolve(
  __dirname,
  "../../../__datasimulated__/dummy-project-tf"
);

const parseJSONFromPath = require("./parseJSON-from-path");

test("Carga un objeto literal serializado y lo 'parsea' JSON.parse", () => {
  const absolutePath = simulatedPaths.files[0];
  const parseJSON = parseJSONFromPath(absolutePath);
  expect(JSON.stringify(simulatedPaths.parseJSONDemo)).toBe(
    JSON.stringify(parseJSON)
  );
});
