const getResources = require("../terraform-tools/handlers/get-keys-resources");
const getResourcesNames = require("../terraform-tools/handlers/get-keys-resource-names");

const parseJSONFromFile = require("../file-system-access/handlers/parseJSON-from-path");

const resource = ({ file: path }) => {
  const terraform = parseJSONFromFile(path);
  const resources = getResources(terraform);
  return resources.map(resource =>
    getResourcesNames(resource, terraform.resource)
  );
};

const rules = ({ rules: path }) => {};

exports.command = "resources";
exports.describe = "List all resource with their custom names.";
exports.builder = {
  file: {
    describe: "File path with extension *.tf.json",
    type: "string",
    // demandOption: true,
    conflicts: "folder"
  }
};
exports.handler = function(argv) {
  console.log(resource(argv));
};

// exports.builder = function(yargs) {
//   return yargs.commandDir("remote_cmds");
// };
