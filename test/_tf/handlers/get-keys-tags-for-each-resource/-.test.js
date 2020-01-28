const dummy = require("./dummy-data");
const getTagsFromResource = require("../../../../src/_tf/handlers/get-keys-tags-for-each-resource");
const parseJSONFromFile = require("../../../../src/_fs/handlers/parseJSON-from-path");

test("Obtener una lista de objetos con los recursos y sus respectivos tags", () => {
  const terraform = parseJSONFromFile(dummy.path);
  const listOfTags = getTagsFromResource(terraform.resource.aws_instance);
  expect(JSON.stringify(listOfTags)).toBe(JSON.stringify(dummy.data));
});
