// MOCKS

// DUMMYDATA
const dummydata = require("@dummydata")(__filename);
// IMPORTS

// CODE2TEST
const filterFilesGivenExt = require("./filter-files-given-ext");

const filterFilesGivenExtTest = () => {
  const filterFilesByExt = filterFilesGivenExt(dummydata.files, ".tf.json");
  expect;
  expect(JSON.stringify(dummydata.files)).toBe(
    JSON.stringify(filterFilesByExt)
  );
};

const tdd = () => {
  test(
    "Filtrar los elementos que solo tengan una extención espeficica",
    filterFilesGivenExtTest
  );
};

describe("filter-files-given-ext", tdd);
