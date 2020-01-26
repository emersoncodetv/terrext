const simulatedPaths = require("./fs/simulated-paths");

const parseJSONFromPath = require("../src/fs/fs-handlers/parseJSON-from-path");
const _hasTags = require("../src/tags-validator/hasTags");

describe("validador de tags", () => {
  let parseJSON;

  test("Carga un objeto literal serializado y lo 'parsea' JSON.parse", () => {
    const absolutePath = simulatedPaths.files[0];
    parseJSON = parseJSONFromPath(absolutePath);
    expect(JSON.stringify(simulatedPaths.parseJSONDemo)).toBe(
      JSON.stringify(parseJSON)
    );
  });

  test("Valida si los resource contienen tags a ser validados", () => {
    const hasTags = _hasTags(parseJSON);
    expect(true).toBe(hasTags);
    expect(false).toBe({});
  });
});
