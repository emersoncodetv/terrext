const path = require("path");
const expectedFilesPaths = require("../@simulation-data/expected-files-paths");

const X = require("../../src/_fs/find-all-tf-json-files");
const directoryPath = path.resolve(
  __dirname,
  "../@simulation-data/dummy-project-tf"
);
const getAllTFFiles = X(directoryPath);

test("List all .tf.json files form a given directory", () => {
  const allFIles = getAllTFFiles.findAllTfJsonFiles(directoryPath);

  const arrayExpected = JSON.stringify(expectedFilesPaths);
  const allFilesToString = JSON.stringify(allFIles);

  expect(arrayExpected).toBe(allFilesToString);
});
