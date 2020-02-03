const findTerraformFiles = require("../file-system-access/find-all-tf-json-files");

exports.command = "paths";
exports.describe = "Return all realpath for each .tf.json file in a folder.";
exports.builder = {
  folder: {
    alias: "f",
    describe: "Terraform Project folder | *.tf.json |",
    type: "string",
    demandOption: true
  }
};
exports.handler = function(argv) {
  console.log(findTerraformFiles(argv.folder));
};
