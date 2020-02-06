// MOCKS

// DUMMYDATA
const dummydata = require("@dummydata")(__filename);
// IMPORTS

// CODE2TEST
const hasFieldsRequired = require("./has-fields-required");

const hasFieldsRequiredTest = () => {
  const areSatisfiedTrue = hasFieldsRequired(
    dummydata.tagsRequiredDummy,
    dummydata.tagsAreSatisfied.tags
  );
  expect(areSatisfiedTrue).toBe(true);

  const areSatisfiedFalse = hasFieldsRequired(
    dummydata.tagsRequiredDummy,
    dummydata.tagsAreNotSatisfied.tags
  );
  expect(areSatisfiedFalse).toBe(false);
};

const tdd = () => {
  test(
    "Validando si los tags solicitados fueron proveidos en cada resource",
    hasFieldsRequiredTest
  );
};

describe("has-fields-required", tdd);
