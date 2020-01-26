const path = require("path");

const filterDirs = require("../../src/fs/fs-handlers/filter-dirs");
const simulatedPaths = require("./simulated-paths");

const directoryPath = path.resolve(__dirname, "../tf.json.test");

test("Filtrar y solo dejar los directorios", () => {
  const dirs = filterDirs(simulatedPaths.raw, directoryPath);
  expect(JSON.stringify(simulatedPaths.dirs)).toBe(JSON.stringify(dirs));
});

const filterFilesGivenExt = require("../../src/fs/fs-handlers/filter-files-given-ext");

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

const hasExtension = require("../../src/fs/fs-handlers/has-extension");

test("Valida que un string finalice con una cadena de caracteres especifica", () => {
  const extension = ".tf.json";
  const nameOfAFile = "root.tf.json";
  expect(true).toBe(hasExtension(extension)(nameOfAFile));
});

const isDirectory = require("../../src/fs/fs-handlers/is-directory");

test("Valida si el path dado corresponde a un directorio", () => {
  expect(true).toBe(isDirectory(directoryPath, "level-1-A"));
  expect(false).toBe(isDirectory(directoryPath, "root.tf.json"));
});

const pathsFromDir = require("../../src/fs/fs-handlers/paths-from-dir");

test("Obtiene todos los elementos de un directorio", () => {
  const paths = pathsFromDir(directoryPath);
  expect(JSON.stringify(simulatedPaths.raw)).toBe(JSON.stringify(paths));
});

const parseJSONFromPath = require("../../src/fs/fs-handlers/parseJSON-from-path");

test("Carga un objeto literal serializado y lo 'parsea' JSON.parse", () => {
  const absolutePath = simulatedPaths.files[0];
  const parseJSON = parseJSONFromPath(absolutePath);
  expect(JSON.stringify(simulatedPaths.parseJSONDemo)).toBe(
    JSON.stringify(parseJSON)
  );
});
