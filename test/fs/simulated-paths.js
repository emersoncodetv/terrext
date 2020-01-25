const path = require("path");
const absolutPath = path.resolve(__dirname, "../tf.json.test");
module.exports = {
  raw: ["level-1-A", "level-1-B", "root.tf.json"],
  dirs: ["level-1-A", "level-1-B"],
  files: ["root.tf.json"].map(item => path.resolve(absolutPath, item))
};
