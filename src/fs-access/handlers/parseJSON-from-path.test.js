// MOCKS

// DUMMYDATA
const dummydata = require("@dummydata")(__filename);
// IMPORTS

// CODE2TEST
const parseJSONFromPath = require("./parseJSON-from-path");

const parseJSONFromPathTest = () => {
  const absolutePath = dummydata.files[0];
  const parseJSON = parseJSONFromPath(absolutePath);
  expect(JSON.stringify(dummydata.parseJSONDemo)).toBe(
    JSON.stringify(parseJSON)
  );
};

const tdd = () => {
  test(
    "Carga un objeto literal serializado y lo 'parsea' JSON.parse",
    parseJSONFromPathTest
  );
};

describe("parseJSON-from-path", tdd);
