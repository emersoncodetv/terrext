const getTagsByProvider = require("./get-tags-by-provider");
const getProvider = require("../../providers/get-provider");

const getTagsByProviderTest = () => {
  const provider = getProvider("aws");
  expect(getTagsByProvider(provider)).toMatchObject(["tags"]);
};

const tdd = () => {
  test(
    "Valida si el provider esta correctamente importado",
    getTagsByProviderTest
  );
};

describe("get-tags-by-provider", tdd);
