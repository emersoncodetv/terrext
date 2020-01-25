const path = require("path");
const expectedFilesPaths = require("./expected-files-paths");

const X = require("../src/fs/find-all-tf-json-files");
const directoryPath = path.resolve(__dirname, "tf.json.test");
const getAllTFFiles = X(directoryPath);

test("List all .tf.json files form a given directory", () => {
  const directoryPath = path.resolve(__dirname, "tf.json.test");
  const allFIles = getAllTFFiles.findAllTfJsonFiles(directoryPath);

  const arrayExpected = JSON.stringify(expectedFilesPaths);
  const allFilesToString = JSON.stringify(allFIles);

  expect(arrayExpected).toBe(allFilesToString);
});
