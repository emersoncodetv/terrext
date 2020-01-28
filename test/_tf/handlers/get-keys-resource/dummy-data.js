const _path = require("path");

const data = ["aws_instance"];
const path = _path.resolve(__dirname, "terraform-dummy.tf.json");

module.exports = {
  data,
  path
};
