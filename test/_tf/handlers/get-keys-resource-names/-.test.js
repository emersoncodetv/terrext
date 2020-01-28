const dummy = require("./dummy-data");

const getResourcesNames = require("../../../../src/_tf/handlers/get-keys-resource-names");

const parseJSONFromFile = require("../../../../src/_fs/handlers/parseJSON-from-path");

test("Obtener una lista de objetos con los recursos y sus respectivos tags", () => {
  const terraform = parseJSONFromFile(dummy.path);
  const listOfResoruceNames = getResourcesNames(
    "aws_instance",
    terraform.resource
  );
  expect(JSON.stringify(listOfResoruceNames)).toBe(JSON.stringify(dummy.data));
});
