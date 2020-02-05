const dummydata = require("@dummydata/tr-tools.tools.get-tags");

const getTags = require("./get-tags");

const getTagsAWSTest = () => {
  const received = getTags({
    provider: "aws",
    file:
      "/Users/emerson/Dev/SERENDIPIA/sdpia-tfops/__dummydata__/terraform-dummy.tf.json"
  });
  expect(received).toMatchObject([
    { example1: { tags: ["Name"] } },
    { example2: { tags: ["Name"] } }
  ]);
};

// const getTagsOCITest = () => {
//   const received = getTags("OCI");
//   expect(received).toMatchObject(dummydata.expected_oci);
// };

const tdd = () => {
  test("Get the supported tags from a provider AWS", getTagsAWSTest);
  // test("Get the supported tags from a provider OCI", getTagsOCITest);
};

describe("get-tags", tdd);
