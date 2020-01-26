const simulatedPaths = require("../@simulation-data/simulated-paths");

const parseJSONFromPath = require("../../src/_fs/handlers/parseJSON-from-path");
const _hasTags = require("../../src/_tf/tags-validator/hasTags");
const _hasResource = require("../../src/_tf/tags-validator/hasResources");

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

const hasFieldsRequired = require("../../src/_tf/tags-validator/hasFieldsRequired");
const tagsRequiredDummy = require("../@simulation-data/tags-required-dummy");
const tagsDummyData = require("../@simulation-data/tags-terraform-dummy");

describe("validador de tags", () => {
  test("Validando si los tags solicitados fueron proveidos en cada resource", () => {
    const areSatisfiedTrue = hasFieldsRequired(
      tagsRequiredDummy,
      tagsDummyData.tagsAreSatisfied.tags
    );
    expect(true).toBe(areSatisfiedTrue);

    const areSatisfiedFalse = hasFieldsRequired(
      tagsRequiredDummy,
      tagsDummyData.tagsAreNotSatisfied.tags
    );
    expect(false).toBe(areSatisfiedFalse);
  });
});
