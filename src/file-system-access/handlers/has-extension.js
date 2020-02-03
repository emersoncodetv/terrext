const hasExtension = extensionToFind =>
  function(fileName) {
    const re = new RegExp(`\\${extensionToFind}$`);
    return re.test(fileName);
  };

module.exports = hasExtension;
