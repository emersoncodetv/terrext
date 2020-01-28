const _fs = require("fs");

const readDir = relativePath => {
  return _fs.readdirSync(relativePath);
};

module.exports = readDir;
