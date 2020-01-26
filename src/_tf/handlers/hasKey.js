const haskey = key => tfjson => {
  const keys = Object.keys(tfjson);
  const hasResources = keys.includes(key);
  return hasResources;
};

module.exports = haskey;
