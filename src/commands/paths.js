const findTerraformFiles = require("../_fs/find-all-tf-json-files");

exports.command = "paths";
exports.describe =
  "Lista todos los realpath de cada archivo .tf.json en un directorio específico";
exports.builder = {
  folder: {
    alias: "f",
    describe: "Directorio proyecto Terraform | *.tf.json |",
    type: "string",
    demandOption: true
  }
};
exports.handler = function(argv) {
  console.log(findTerraformFiles(argv.folder));
};
