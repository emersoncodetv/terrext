const path = require("path");

const X = require("../src/find-all-tf-json-files");
const directoryPath = path.resolve(__dirname, "tf.json.test");
const getAllTFFiles = X(directoryPath);

test("Get all subdirectories for a given directory", () => {
  const itemsInADir = getAllTFFiles.readDir(directoryPath);
  const subDirectories = getAllTFFiles.readSubDirectories(
    itemsInADir,
    directoryPath
  );
  expect(JSON.stringify(["level-1-A", "level-1-B"])).toBe(
    JSON.stringify(subDirectories)
  );
});

test("Filter files with a given extension", () => {
  const filesWithExtension = getAllTFFiles.filesWithAGivenExtension(
    ["1-A.tf.json", "2-B.tf.json", "3-Z.tfstate"],
    ".tf.json"
  );
  expect(JSON.stringify(filesWithExtension)).toBe(
    JSON.stringify(["1-A.tf.json", "2-B.tf.json"])
  );
});

test("List all .tf.json files form a given directory", () => {
  const directoryPath = path.resolve(__dirname, "tf.json.test");
  const allFIles = getAllTFFiles.findAllTfJsonFiles(directoryPath);

  const arrayExpected = JSON.stringify([
    "root.tf.json",
    "1-A.tf.json",
    "2-A-2.tf.json",
    "2-A.tf.json",
    "2-B.tf.json",
    "1-B.tf.json",
    "2-C.tf.json",
    "2-D.tf.json"
  ]);
  const allFilesToString = JSON.stringify(allFIles);

  expect(arrayExpected).toBe(allFilesToString);
});
