const getProvider = require("../../providers/get-provider");

const getResources = require("@terraform/tools/get-resources");
const getKeysTagNames = require("@terraform/handlers/get-keys-tags-names");
const getTagsByProvider = require("@terraform/handlers/get-tags-by-provider");

const parseJSONFromFile = require("@fs-access/handlers/parseJSON-from-path");

const getTags = ({ provider, file: path }) => {
  provider = getProvider(provider);
  const terraform = parseJSONFromFile(path);
  const resources = getResources({ file: path });
  const tagsProvider = getTagsByProvider(provider);

  let listTags = [];

  tagsProvider.forEach(tagProvider => {
    resources.forEach(resource => {
      Object.keys(resource).forEach(resourceProvider => {
        resource[resourceProvider].forEach(resourceName => {
          listTags.push({
            [resourceName]: getKeysTagNames(
              tagProvider,
              terraform.resource[resourceProvider][resourceName]
            )
          });
        });
      });
    });
  });
  return listTags;
};

module.exports = getTags;
