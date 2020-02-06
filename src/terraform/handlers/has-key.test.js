// MOCKS

// DUMMYDATA
const dummydata = require("@dummydata/")(__filename);
// IMPORTS
const parseJSONFromPath = require("@fs-access/handlers/parseJSON-from-path");
// CODE2TEST
const hasTags = require("./has-key")("tags");
const hasResource = require("./has-key")("resource");

const hasResourceTest = terraformFile => () => {
  const hasResource_yes = hasResource(terraformFile);
  expect(true).toBe(hasResource_yes);
  const hasResource_no = hasResource({});
  expect(false).toBe(hasResource_no);
};

const hasTagsResource = resource => () => {
  const hasTags_no = hasTags(resource);
  expect(false).toBe(hasTags_no);

  resource.tags = { test: "test" };
  const hasTags_yes = hasTags(resource);
  expect(true).toBe(hasTags_yes);
};

let parseJSON;
const absolutePath = dummydata.files[0];
parseJSON = parseJSONFromPath(absolutePath);

const tdd = () => {
  test("Valida si el archivo contiene resources", hasResourceTest(parseJSON));
  test("Resource has tags", hasTagsResource(parseJSON.resource));
};

describe("has-key", tdd);
