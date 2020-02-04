const findResource = require("../tr-tools/show-resources");

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
  console.log(findResource(argv));
};

// exports.builder = function(yargs) {
//   return yargs.commandDir("remote_cmds");
// };
