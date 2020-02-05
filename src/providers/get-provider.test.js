const getProvider = require("./get-provider");

const getProviderTest = () => {
  expect(getProvider("aws")).toMatchObject({
    tags: {}
  });
};

const tdd = () => {
  test("Valida si el provider esta correctamente importado", getProviderTest);
};

describe("get-provider", tdd);
