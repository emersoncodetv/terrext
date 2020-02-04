const _path = require("path");

const data = ["Name"];
const path = _path.resolve(
  __dirname,
  "../../../__dummydata__/terraform-dummy.tf.json"
);

const dummy = {
  data,
  path
};

const getKeysTags = require("./get-keys-tags");

const parseJSONFromFile = require("../../fs-access/handlers/parseJSON-from-path");

const getKeysTagsTest = () => {
  const terraform = parseJSONFromFile(dummy.path);
  const listOfTags = getKeysTags(terraform.resource.aws_instance.example1);
  expect(JSON.stringify(listOfTags)).toBe(JSON.stringify(dummy.data));
};

const tdd = () => {
  test(
    "Obtener una lista de objetos con los recursos y sus respectivos tags",
    getKeysTagsTest
  );
};

describe("get-keys-tags", tdd);
