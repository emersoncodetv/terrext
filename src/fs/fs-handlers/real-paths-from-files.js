const _path = require("path");

const readDir = (relativePath, listOfFiles) => {
  let arrayRealPathsFromFiles = listOfFiles.map(item =>
    _path.resolve(relativePath, item)
  );
  return arrayRealPathsFromFiles;
};

module.exports = readDir;
