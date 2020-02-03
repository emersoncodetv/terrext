const _path = require("path");

const data = ["Name"];
const path = _path.resolve(
  __dirname,
  "../../../__datasimulated__/terraform-dummy.tf.json"
);

const dummy = {
  data,
  path
};

const getTags = require("./get-keys-tags");

const parseJSONFromFile = require("../../file-system-access/handlers/parseJSON-from-path");

test("Obtener una lista de objetos con los recursos y sus respectivos tags", () => {
  const terraform = parseJSONFromFile(dummy.path);
  const listOfTags = getTags(terraform.resource.aws_instance.example1);
  expect(JSON.stringify(listOfTags)).toBe(JSON.stringify(dummy.data));
});
