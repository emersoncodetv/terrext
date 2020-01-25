const _fs = require("fs");
const _path = require("path");

function AllTFFiles(directory) {
  directory = directory;
  const extensionToFind = ".tf.json";

  function findAllTfJsonFiles(relativePath) {
    const listOfFiles = readDir(relativePath);
    let filesHasExtension = filesWithAGivenExtension(listOfFiles);

    readSubDirectories(listOfFiles, relativePath).forEach(subDirectory => {
      let listFiles = findAllTfJsonFiles(
        _path.resolve(relativePath, subDirectory)
      );

      filesHasExtension = filesHasExtension.concat(listFiles);
    });

    return filesHasExtension;
  }

  function readDir(relativePath) {
    return _fs.readdirSync(relativePath);
  }

  function readSubDirectories(itemsInADir, relativePath) {
    const onlyDir = itemsInADir.filter(item => isDirectory(relativePath, item));
    return onlyDir;
  }

  function filesWithAGivenExtension(listOfFiles) {
    return listOfFiles.filter(fileName => hasExtension(fileName));
  }

  function hasExtension(fileName) {
    const re = new RegExp(`\\${extensionToFind}$`);
    return re.test(fileName);
  }

  function isDirectory(path, item) {
    // console.log(_path.resolve(path, item));
    return _fs.statSync(_path.resolve(path, item)).isDirectory();
  }

  return {
    readDir,
    isDirectory,
    hasExtension,
    findAllTfJsonFiles,
    findAllTfJsonFiles,
    readSubDirectories,
    filesWithAGivenExtension
  };
}

module.exports = AllTFFiles;
