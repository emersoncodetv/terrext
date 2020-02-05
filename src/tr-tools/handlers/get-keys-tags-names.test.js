const _path = require("path");

const data = [{ tags: ["Name"] }];
const path = _path.resolve(
  __dirname,
  "../../../__dummydata__/terraform-dummy.tf.json"
);

const dummy = {
  data,
  path
};

const getKeysTagNames = require("./get-keys-tags-names");
const getProvider = require("../../providers/get-provider");
const getTagsByProvider = require("./get-tags-by-provider");

const getKeysTagNamesTest = () => {
  const provider = getProvider("aws");
  const tagsProvider = getTagsByProvider(provider);

  console.log(tagsProvider);

  const tags = tagsProvider.map(tagProvider => {
    return getKeysTagNames(tagProvider, {
      for_each: "${toset(var.user_names)}",
      instance_type: "t2.micro",
      ami: "ami-0c55b159cbfafe1f0",
      tags: {
        Name: "Demo1"
      }
    });
  });

  expect(tags).toMatchObject(dummy.data);
};

const tdd = () => {
  test("", getKeysTagNamesTest);
};

describe("get-keys-tags-names", tdd);
