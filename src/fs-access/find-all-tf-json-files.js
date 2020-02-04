const _path = require("path");

const filterDirs = require("./handlers/filter-dirs");
const filterFilesGivenExt = require("./handlers/filter-files-given-ext");

const pathsFromDir = require("./handlers/paths-from-dir");
const realPathsFromFiles = require("./handlers/real-paths-from-files");

const extensionToFind = ".tf.json";

function findTerraformFiles(relativePath) {
  const listOfItems = pathsFromDir(relativePath);
  let tfJsonFiles = filterFilesGivenExt(listOfItems, extensionToFind);
  tfJsonFiles = realPathsFromFiles(relativePath, tfJsonFiles);

  let dirs = filterDirs(relativePath, listOfItems);
  dirs.forEach(subDirectory => {
    let subDirectoryPath = _path.resolve(relativePath, subDirectory);
    let listFiles = findTerraformFiles(subDirectoryPath);
    tfJsonFiles = tfJsonFiles.concat(listFiles);
  });

  return tfJsonFiles;
}

module.exports = findTerraformFiles;
