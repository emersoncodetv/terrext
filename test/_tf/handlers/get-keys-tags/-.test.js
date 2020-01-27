const dummy = require("./dummy-data");

const getTags = require("../../../../src/_tf/handlers/get-keys-tags");

const parseJSONFromFile = require("../../../../src/_fs/handlers/parseJSON-from-path");

test("Obtener una lista de objetos con los recursos y sus respectivos tags", () => {
  const terraform = parseJSONFromFile(dummy.path);
  const listOfTags = getTags(terraform.resource.aws_instance.example);
  expect(JSON.stringify(listOfTags)).toBe(JSON.stringify(dummy.data));
});
