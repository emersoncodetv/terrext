const getResourceNames = (resourceName, resource) => {
  let listResourceNames = Object.keys(resource[resourceName]);
  return { [resourceName]: listResourceNames };
};

module.exports = getResourceNames;
