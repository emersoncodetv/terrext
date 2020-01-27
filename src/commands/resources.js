const getResources = require("../_tf/handlers/get-keys-resources");
const getResourcesNames = require("../_tf/handlers/get-keys-resource-names");

const parseJSONFromFile = require("../_fs/handlers/parseJSON-from-path");

const resources = path => {
  const terraform = parseJSONFromFile(path);
  const resources = getResources(terraform);
  return resources.map(resource =>
    getResourcesNames(resource, terraform.resource)
  );
};

module.exports = resources;
