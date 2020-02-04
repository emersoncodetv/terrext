const hasFieldsRequired = require("./has-fields-required");
const tagsRequiredDummy = require("../../../__dummydata__/tags-required-dummy");
const tagsDummyData = require("../../../__dummydata__/tags-terraform-dummy");

describe("has-fields-required validador de tags", () => {
  test("Validando si los tags solicitados fueron proveidos en cada resource", () => {
    const areSatisfiedTrue = hasFieldsRequired(
      tagsRequiredDummy,
      tagsDummyData.tagsAreSatisfied.tags
    );
    expect(areSatisfiedTrue).toBe(true);

    const areSatisfiedFalse = hasFieldsRequired(
      tagsRequiredDummy,
      tagsDummyData.tagsAreNotSatisfied.tags
    );
    expect(areSatisfiedFalse).toBe(false);
  });
});