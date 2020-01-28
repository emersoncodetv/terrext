const fs = require("fs");

let a = fs
  .readdirSync(__dirname)
  .map(item => String.prototype.concat(__dirname, item));

console.log(a);
