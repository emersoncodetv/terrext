// MOCKS

// DUMMYDATA
const dummydata = require("@dummydata/")(__filename);
// IMPORTS

// CODE2TEST
const getTags = require("./get-tags");

const getTagsAWSTest = () => {
  const received = getTags({
    provider: "aws",
    file: dummydata.path
  });
  expect(received).toMatchObject(dummydata.expected);
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
