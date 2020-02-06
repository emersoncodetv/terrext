// MOCKS

// DUMMYDATA
const dummydata = require("@dummydata")(__filename);
// IMPORTS
const parseJSONFromFile = require("@fs-access/handlers/parseJSON-from-path");
// CODE2TEST
const getResources = require("./get-keys-resources");

const getKeysResourcesTest = () => {
  const terraform = parseJSONFromFile(dummydata.path);
  const listOfTags = getResources(terraform);
  expect(JSON.stringify(listOfTags)).toBe(JSON.stringify(dummydata.data));
};

const tdd = () => {
  test(
    "Obtener una lista de objetos con los recursos y sus respectivos tags",
    getKeysResourcesTest
  );
};

describe("get-keys-resources", tdd);
