// MOCKS

// DUMMYDATA
const dummydata = require("@dummydata/")(__filename);
// IMPORTS
const parseJSONFromFile = require("@fs-access/handlers/parseJSON-from-path");
// CODE2TEST
const getResourcesNames = require("./get-keys-resource-names");

const getResourcesNamesTest = () => {
  const terraform = parseJSONFromFile(dummydata.path);
  const listOfResoruceNames = getResourcesNames(
    "aws_instance",
    terraform.resource
  );
  expect(JSON.stringify(listOfResoruceNames)).toBe(
    JSON.stringify(dummydata.data)
  );
};

const tdd = () => {
  test(
    "Obtener una lista de objetos con los recursos y sus respectivos tags",
    getResourcesNamesTest
  );
};

describe("get-keys-resource-names", tdd);
