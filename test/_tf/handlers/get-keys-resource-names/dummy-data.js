const _path = require("path");

const data = { aws_instance: ["example1", "example2"] };
const path = _path.resolve(__dirname, "terraform-dummy.tf.json");

module.exports = {
  data,
  path
};
