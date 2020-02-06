const hasExtension = require("@fs-access/handlers/has-extension");

function filesWithAGivenExtension(listOfFiles, extensionToFind) {
  return listOfFiles.filter(fileName =>
    hasExtension(extensionToFind)(fileName)
  );
}

module.exports = filesWithAGivenExtension;
