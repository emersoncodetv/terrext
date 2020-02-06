const path = require("path");
const absolutPath = path.resolve(__dirname, "./dummy-project-tf");
module.exports = {
  path: path.resolve(__dirname, "../dummy-project-tf"),
  raw: ["level-1-A", "level-1-B", "root.tf.json"],
  dirs: ["level-1-A", "level-1-B"],
  files: ["root.tf.json"].map(item => path.resolve(absolutPath, item)),
  parseJSONDemo: {
    provider: {
      aws: {
        region: "us-east-2"
      }
    },
    resource: {
      aws_instance: {
        example: {
          for_each: "${toset(var.user_names)}",
          instance_type: "t2.micro",
          ami: "ami-0c55b159cbfafe1f0",
          tags: {
            Name: "${each.value}"
          }
        }
      }
    }
  }
};
