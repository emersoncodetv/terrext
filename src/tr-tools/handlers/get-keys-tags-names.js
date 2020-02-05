module.exports = (tagName, resource) => {
  let listTagNames = Object.keys(resource[tagName]);
  return { [tagName]: listTagNames };
};
