const path = require("path");

module.exports = {
  expected: JSON.stringify([{ aws_instance: ["example1", "example2"] }]),
  path: path.resolve(__dirname, "terraform-dummy.tf.json")
};
