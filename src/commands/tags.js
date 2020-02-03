const getTagsFromResource = require("../terraform-tools/handlers/get-keys-tags-for-each-resource");
const parseJSONFromFile = require("../file-system-access/handlers/parseJSON-from-path");
const hasResources = require("../terraform-tools/handlers/has-key")("resource");

const list = path => {
  const terraform = parseJSONFromFile(path);
  let listResource;
  if (hasResources(terraform)) listResource = Object.keys(terraform);
  else [];
  const listOfTags = getTagsFromResource(terraform.resource.aws_instance);
};

exports.handler = list;
exports.command = "tags";
exports.describe = "List all tags for each resource in a terraform file.";
exports.builder = {
  file: {
    describe: "File path with extension *.tf.json",
    type: "string",
    // demandOption: true,
    conflicts: "folder"
  }
};
