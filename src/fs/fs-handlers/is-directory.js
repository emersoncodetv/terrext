const _fs = require("fs");
const _path = require("path");

const isDirectory = (path, item) => {
  // console.log(_path.resolve(path, item));
  return _fs.statSync(_path.resolve(path, item)).isDirectory();
};

module.exports = isDirectory;
