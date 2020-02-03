const _path = require("path");

const data = ["aws_instance"];
const path = _path.resolve(
  __dirname,
  "../../../__datasimulated__/terraform-dummy.tf.json"
);

const dummy = {
  data,
  path
};

const getResources = require("./get-keys-resources");

const parseJSONFromFile = require("../../file-system-access/handlers/parseJSON-from-path");

test("Obtener una lista de objetos con los recursos y sus respectivos tags", () => {
  const terraform = parseJSONFromFile(dummy.path);
  const listOfTags = getResources(terraform);
  expect(JSON.stringify(listOfTags)).toBe(JSON.stringify(dummy.data));
});
