const hasTags = require("./hasTags");

const getTags = resource => {
  if (hasTags(resource)) {
    let listTags = Object.keys(resource.tags);
    return listTags;
  }
  return [];
};

module.exports = getTags;
