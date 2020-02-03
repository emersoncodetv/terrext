const path = require("path");

const simulatedPaths = require("../../../__datasimulated__/simulated-paths");

const filterFilesGivenExt = require("./filter-files-given-ext");

test("Filtrar los elementos que solo tengan una extención espeficica", () => {
  const filterFilesByExt = filterFilesGivenExt(
    simulatedPaths.files,
    ".tf.json"
  );
  expect;
  expect(JSON.stringify(simulatedPaths.files)).toBe(
    JSON.stringify(filterFilesByExt)
  );
});
