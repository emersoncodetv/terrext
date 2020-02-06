const getTags = require("../src/terraform/handlers/get-keys-tags-by-resource");

const getTagsFromResource = resources => {
  const listResources = Object.keys(resources);
  return listResources.map(resource => ({
    [resource]: getTags(resources[resource])
  }));
};

module.exports = getTagsFromResource;
