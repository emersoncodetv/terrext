const path = require("path");

console.log(
  path.resolve(
    "/Users/emerson/Dev/SERENDIPIA/sdpia-terraform-validator/test/@simulation-data/level-1-B",
    "1-B.tf.jso",
    "../"
  )
);

console.log(
  path.resolve(
    "/Users/emerson/Dev/SERENDIPIA/sdpia-terraform-validator/test/@simulation-data/level-1-B",
    "1-B.tf.jso"
  )
);

console.log(
  path.resolve(
    "/Users/emerson/Dev/SERENDIPIA/sdpia-terraform-validator/test/@simulation-data/level-1-B",
    "*.tf.json"
  )
);
