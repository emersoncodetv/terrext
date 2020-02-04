const path = require("path");
const expectedFilesPaths = require("../../__dummydata__/expected-files-paths");

const findTerraformFiles = require("./find-all-tf-json-files");
const directoryPath = path.resolve(
  __dirname,
  "../../__dummydata__/dummy-project-tf"
);

const tdd = () => {
  test("find-all-tf-json-files List all .tf.json files form a given directory", () => {
    const allFIles = findTerraformFiles(directoryPath);

    const arrayExpected = JSON.stringify(expectedFilesPaths);
    const allFilesToString = JSON.stringify(allFIles);

    expect(arrayExpected).toBe(allFilesToString);
  });
};

describe("find-all-tf-json-files", tdd);
