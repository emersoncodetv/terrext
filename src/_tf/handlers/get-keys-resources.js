const hasResource = require("./has-key")("resource");

const getResources = terraform => {
  if (hasResource(terraform)) {
    let listResources = Object.keys(terraform.resource);
    return listResources;
  }
  return [];
};

module.exports = getResources;
