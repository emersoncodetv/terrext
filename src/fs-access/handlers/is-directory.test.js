const path = require("path");

const directoryPath = path.resolve(
  __dirname,
  "../../../__dummydata__/dummy-project-tf"
);

const isDirectory = require("./is-directory");

test("is-directory Valida si el path dado corresponde a un directorio", () => {
  expect(true).toBe(isDirectory(directoryPath, "level-1-A"));
  expect(false).toBe(isDirectory(directoryPath, "root.tf.json"));
});
