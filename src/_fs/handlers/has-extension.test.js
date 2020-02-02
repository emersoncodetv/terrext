const hasExtension = require("./has-extension");

test("Valida que un string finalice con una cadena de caracteres especifica", () => {
  const extension = ".tf.json";
  const nameOfAFile = "root.tf.json";
  expect(true).toBe(hasExtension(extension)(nameOfAFile));
});
