const path = require("path");

const simulatedPaths = require("@dummydata/simulated-paths");

const filterFilesGivenExt = require("./filter-files-given-ext");

test("filter-files-given-ext Filtrar los elementos que solo tengan una extención espeficica", () => {
  const filterFilesByExt = filterFilesGivenExt(
    simulatedPaths.files,
    ".tf.json"
  );
  expect;
  expect(JSON.stringify(simulatedPaths.files)).toBe(
    JSON.stringify(filterFilesByExt)
  );
});
