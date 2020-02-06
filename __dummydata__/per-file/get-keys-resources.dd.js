const _path = require("path");

const data = ["aws_instance"];
const path = _path.resolve(__dirname, "../terraform-dummy.tf.json");

const dummy = {
  data,
  path
};

module.exports = dummy;
