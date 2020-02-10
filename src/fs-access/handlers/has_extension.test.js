// MOCKS

// DUMMYDATA

// IMPORTS

// CODE2TEST
const { hasExtension } = require("./has_extension");

const hasExtensionTest = () => {
  const extension = ".tf.json";
  const nameOfAFile = "root.tf.json";
  expect(hasExtension(extension, nameOfAFile)).toBe(true);
};

const tdd = () => {
  test(
    "Valida que un string finalice con una cadena de caracteres especifica",
    hasExtensionTest
  );
};

describe("has-extension", tdd);
