const simulatedPaths = require("../@simulation-data/simulated-paths");

const parseJSONFromPath = require("../../src/_fs/handlers/parseJSON-from-path");
const _hasTags = require("../../src/_tf/handlers/has-key")("tags");
const _hasResource = require("../../src/_tf/handlers/has-key")("resource");

describe("Validador dinamico de keys en un objeto literal", () => {
  let parseJSON;
  const absolutePath = simulatedPaths.files[0];
  parseJSON = parseJSONFromPath(absolutePath);

  test("Valida si el terraform file contiene resources", () => {
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