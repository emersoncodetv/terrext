// MOCKS

// DUMMYDATA
const dummydata = require("@dummydata")(__filename);
// IMPORTS
const getProvider = require("@providers/get-provider");
// CODE2TEST
const getKeysTagNames = require("./get-keys-tags-names");
const getTagsByProvider = require("./get-tags-by-provider");

const getKeysTagNamesTest = () => {
  const provider = getProvider("aws");
  const tagsProvider = getTagsByProvider(provider);

  const tags = tagsProvider.map(tagProvider => {
    return getKeysTagNames(tagProvider, dummydata.resource);
  });

  expect(tags).toMatchObject(dummydata.data);
};

const tdd = () => {
  test("Obtienen los tags de un resource", getKeysTagNamesTest);
};

describe("get-keys-tags-names", tdd);
