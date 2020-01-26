const hasFieldsRequired = (tagsRequired, resourceTags) => {
  const tagsRequiredKeys = Object.keys(tagsRequired);
  const resourceTagsKeys = Object.keys(resourceTags);
  const hasSameKeys = tagsRequiredKeys.every(value =>
    resourceTagsKeys.includes(value)
  );
  return hasSameKeys;
};

module.exports = hasFieldsRequired;
