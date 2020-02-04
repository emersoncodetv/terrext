const _path = require("path");

const data = [{ example1: ["Name"] }, { example2: ["Name"] }];
const path = _path.resolve(
  __dirname,
  "../../../__dummydata__/terraform-dummy.tf.json"
);

const dummy = {
  data,
  path
};

const getTagsFromResource = require("./get-keys-tags-for-each-resource");
const parseJSONFromFile = require("../../fs-access/handlers/parseJSON-from-path");

test("get-keys-tags-for-each-resource Obtener una lista de objetos con los recursos y sus respectivos tags", () => {
  const terraform = parseJSONFromFile(dummy.path);
  const listOfTags = getTagsFromResource(terraform.resource.aws_instance);
  expect(JSON.stringify(listOfTags)).toBe(JSON.stringify(dummy.data));
});
