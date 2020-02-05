const showTags = require("../tr-tools/show-tags");

exports.handler = function(argv) {
  console.dir(showTags(argv), { depth: null, colors: true });
};
exports.command = "tags";
exports.describe = "List all tags for each resource in a terraform file.";
exports.builder = {
  file: {
    describe: "File path with extension *.tf.json",
    type: "string",
    demandOption: true
  },
  provider: {
    describe: "Provider short name",
    type: "string",
    demandOption: true
  }
};
