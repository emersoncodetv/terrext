const getTags = require("./get-keys-tags");

const getTagsFromResource = resources => {
  const listResources = Object.keys(resources);
  return listResources.map(resource => ({
    [resource]: getTags(resources[resource])
  }));
};

module.exports = getTagsFromResource;
