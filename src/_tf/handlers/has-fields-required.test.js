const hasFieldsRequired = require("./has-fields-required");
const tagsRequiredDummy = require("../../../__datasimulated__/tags-required-dummy");
const tagsDummyData = require("../../../__datasimulated__/tags-terraform-dummy");

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
