const path = require("path");

module.exports = {
  expected: JSON.stringify([
    "/Users/emerson/Dev/SERENDIPIA/sdpia-tfops/__dummydata__/dummy-project-tf/level-1-A/level-2-A/2-A-2.tf.json",
    "/Users/emerson/Dev/SERENDIPIA/sdpia-tfops/__dummydata__/dummy-project-tf/level-1-A/level-2-A/2-A.tf.json"
  ]),
  listOfFiles: ["2-A-2.tf.json", "2-A.tf.json"],
  path: path.resolve("./__dummydata__/dummy-project-tf/level-1-A/level-2-A")
};
