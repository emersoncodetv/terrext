const _path = require("path");

const data = [{ example1: ["Name"] }, { example2: ["Name"] }];
const path = _path.resolve(__dirname, "terraform-dummy.tf.json");

module.exports = {
  data,
  path
};
