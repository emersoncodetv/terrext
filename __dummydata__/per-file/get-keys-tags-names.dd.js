const _path = require("path");

const data = [{ tags: ["Name"] }];
const path = _path.resolve(__dirname, "../terraform-dummy.tf.json");

const dummy = {
  data,
  path,
  resource: {
    for_each: "${toset(var.user_names)}",
    instance_type: "t2.micro",
    ami: "ami-0c55b159cbfafe1f0",
    tags: {
      Name: "Demo1"
    }
  }
};

module.exports = dummy;
