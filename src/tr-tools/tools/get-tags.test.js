const dummydata = require("../../../__dummydata__/expected-tags");

const getTags = require("./get-tags");

const getTagsTest = () => {
  console.log(getTags({ file: dummydata.path }));
  expect(false).toBe(true);
};

const tdd = () => {
  test("Devuelve la defincion de tags por recurso", getTagsTest);
};

describe("get-tags", tdd);
