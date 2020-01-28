const fs = require("fs");
const path = require("path");

const tfFile = path.resolve(__dirname, "example-for-each.tf.json");

fs.readFile(tfFile, (error, data) => {
  console.log(data.toString());
  validation = wrapup(JSON.parse(data.toString()));
  validation.checkTags();
});

function wrapup(_tfFile) {
  const tfFile = _tfFile;

  const checkTags = () => {
    console.log(tfFile.resource);
    tfFile.resource;
    console.log(Object.keys(tfFile.resource));
  };

  return {
    checkTags
  };
}
