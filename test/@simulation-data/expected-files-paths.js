const _path = require("path");

module.exports = [
  "root.tf.json",
  "level-1-A/1-A.tf.json",
  "level-1-A/level-2-A/2-A-2.tf.json",
  "level-1-A/level-2-A/2-A.tf.json",
  "level-1-A/level-2-B/2-B.tf.json",
  "level-1-B/1-B.tf.json",
  "level-1-B/level-2-C/2-C.tf.json",
  "level-1-B/level-2-C/level-2-D/2-D.tf.json"
].map(path => _path.resolve(__dirname, "dummy-project-tf", path));
