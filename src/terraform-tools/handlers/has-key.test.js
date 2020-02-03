const simulatedPaths = require("../../../__datasimulated__/simulated-paths");

const parseJSONFromPath = require("../../file-system-access/handlers/parseJSON-from-path");
const _hasTags = require("./has-key")("tags");
const _hasResource = require("./has-key")("resource");

describe("Validador de keys en terraform file", () => {
  let parseJSON;
  const absolutePath = simulatedPaths.files[0];
  parseJSON = parseJSONFromPath(absolutePath);

  test("Valida si el archivo contiene resources", () => {
    const hasResource_yes = _hasResource(parseJSON);
    expect(true).toBe(hasResource_yes);
    const hasResource_no = _hasResource({});
    expect(false).toBe(hasResource_no);
  });

  test("Valida si los resource contienen tags a ser validados", () => {
    const hasTags_no = _hasTags(parseJSON.resource);
    expect(false).toBe(hasTags_no);

    parseJSON.resource.tags = { test: "test" };
    const hasTags_yes = _hasTags(parseJSON.resource);
    expect(true).toBe(hasTags_yes);
  });
});
