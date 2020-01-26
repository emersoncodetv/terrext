const path = require("path");
const expectedFilesPaths = require("../@simulation-data/expected-files-paths");

const findTerraformFiles = require("../../src/_fs/find-all-tf-json-files");
const directoryPath = path.resolve(
  __dirname,
  "../@simulation-data/dummy-project-tf"
);

test("List all .tf.json files form a given directory", () => {
  const allFIles = findTerraformFiles(directoryPath);

  const arrayExpected = JSON.stringify(expectedFilesPaths);
  const allFilesToString = JSON.stringify(allFIles);

  expect(arrayExpected).toBe(allFilesToString);
});
