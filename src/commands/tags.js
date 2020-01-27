const getTagsFromResource = require("../_tf/handlers/get-keys-tags-for-each-resource");
const parseJSONFromFile = require("../_fs/handlers/parseJSON-from-path");
const hasResources = require("../_tf/handlers//has-resource");

const list = path => {
  const terraform = parseJSONFromFile(path);
  let listResource;
  if (hasResources(terraform)) listResource = Object.keys(terraform);
  else [];
  const listOfTags = getTagsFromResource(terraform.resource.aws_instance);
};

module.exports = list;
