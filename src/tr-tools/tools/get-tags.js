const getTagsFromResource = require("../handlers/get-keys-tags-for-each-resource");
const parseJSONFromFile = require("../../fs-access/handlers/parseJSON-from-path");
const hasResources = require("../handlers/has-key")("resource");

const list = ({ file: path }) => {
  const terraform = parseJSONFromFile(path);
  let listResource;

  if (hasResources(terraform)) {
    listResource = Object.keys(terraform);
  } else [];

  console.log(listResource);

  const listOfTags = getTagsFromResource(terraform.resource.aws_instance);
};

module.exports = list;
