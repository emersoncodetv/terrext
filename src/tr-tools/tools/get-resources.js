const getResources = require("../handlers/get-keys-resources");
const getResourcesNames = require("../handlers/get-keys-resource-names");

const parseJSONFromFile = require("../../fs-access/handlers/parseJSON-from-path");

module.exports = ({ file: path }) => {
  const terraform = parseJSONFromFile(path);
  const resources = getResources(terraform);
  return resources.map(resource =>
    getResourcesNames(resource, terraform.resource)
  );
};
