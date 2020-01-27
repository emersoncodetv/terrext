const getResources = require("../_tf/handlers/get-keys-resources");
const getResourcesNames = require("../_tf/handlers/get-keys-resource-names");

const parseJSONFromFile = require("../_fs/handlers/parseJSON-from-path");

const resources = ({ file: path }) => {
  const terraform = parseJSONFromFile(path);
  const resources = getResources(terraform);
  return resources.map(resource =>
    getResourcesNames(resource, terraform.resource)
  );
};

exports.command = "resource";
exports.describe = "Lista los resource con sus respectivos nombres";
exports.builder = {
  file: {
    describe: "Path a un archivo de terraform con extención *.tf.json",
    type: "string",
    // demandOption: true,
    conflicts: "folder"
  }
};
exports.handler = function(argv) {
  console.log(resources(argv));
};

// exports.builder = function(yargs) {
//   return yargs.commandDir("remote_cmds");
// };
