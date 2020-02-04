const showTags = require("../tr-tools/show-tags");

exports.handler = = function(argv) {
  console.log(showTags(argv));
};
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
