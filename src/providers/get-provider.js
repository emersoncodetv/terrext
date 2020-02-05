module.exports = providerName => {
  switch (providerName) {
    case "aws":
      return require("./aws.json");
    case "oci":
      return require("./oci.json");
  }
};
