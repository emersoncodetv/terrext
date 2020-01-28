const dummy = require("./dummy-data");

const getResources = require("../../../../src/_tf/handlers/get-keys-resources");

const parseJSONFromFile = require("../../../../src/_fs/handlers/parseJSON-from-path");

test("Obtener una lista de objetos con los recursos y sus respectivos tags", () => {
  const terraform = parseJSONFromFile(dummy.path);
  const listOfTags = getResources(terraform);
  expect(JSON.stringify(listOfTags)).toBe(JSON.stringify(dummy.data));
});
