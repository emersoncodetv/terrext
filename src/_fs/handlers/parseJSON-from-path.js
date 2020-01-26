const _fs = require("fs");

const parseJSON = absolutePath => {
  const fileContent = _fs.readFileSync(absolutePath, { encoding: "utf-8" });
  const parseJSON = JSON.parse(fileContent);
  return parseJSON;
};

module.exports = parseJSON;
