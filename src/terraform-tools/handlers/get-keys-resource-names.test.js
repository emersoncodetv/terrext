const _path = require("path");

const data = { aws_instance: ["example1", "example2"] };
const path = _path.resolve(
  __dirname,
  "../../../__datasimulated__/terraform-dummy.tf.json"
);

const dummy = {
  data,
  path
};

const getResourcesNames = require("./get-keys-resource-names");

const parseJSONFromFile = require("../../file-system-access/handlers/parseJSON-from-path");

test("Obtener una lista de objetos con los recursos y sus respectivos tags", () => {
  const terraform = parseJSONFromFile(dummy.path);
  const listOfResoruceNames = getResourcesNames(
    "aws_instance",
    terraform.resource
  );
  expect(JSON.stringify(listOfResoruceNames)).toBe(JSON.stringify(dummy.data));
});
