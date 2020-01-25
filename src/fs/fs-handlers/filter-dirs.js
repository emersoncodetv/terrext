const isDirectory = require("./is-directory");

const readSubDirectories = (itemsInADir, relativePath) => {
  const onlyDir = itemsInADir.filter(item => isDirectory(relativePath, item));
  return onlyDir;
};

module.exports = readSubDirectories;
