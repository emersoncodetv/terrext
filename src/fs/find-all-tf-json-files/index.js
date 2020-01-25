const _path = require("path");

const isDirectory = require("../fs-handlers/is-directory");
const hasExtension = require("../fs-handlers/has-extension");

const filterDirs = require("../fs-handlers/filter-dirs");
const filterFilesGivenExt = require("../fs-handlers/filter-files-given-ext");

const pathsFromDir = require("../fs-handlers/paths-from-dir");
const realPathsFromFiles = require("../fs-handlers/real-paths-from-files");

function AllTFFiles(directory) {
  directory = directory;
  const extensionToFind = ".tf.json";

  function findAllTfJsonFiles(relativePath) {
    const listOfItems = pathsFromDir(relativePath);

    let tfJsonFiles = filterFilesGivenExt(listOfItems, extensionToFind);
    tfJsonFiles = realPathsFromFiles(relativePath, tfJsonFiles);
    let dirs = filterDirs(listOfItems, relativePath);

    dirs.forEach(subDirectory => {
      let subDirectoryPath = _path.resolve(relativePath, subDirectory);
      let listFiles = findAllTfJsonFiles(subDirectoryPath);

      tfJsonFiles = tfJsonFiles.concat(listFiles);
    });

    return tfJsonFiles;
  }

  return {
    findAllTfJsonFiles
  };
}

module.exports = AllTFFiles;
