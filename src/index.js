// const terminalApp = require("./terminal-app");
const yargs = require("yargs");
const fs = require("fs");

const version = fs.readFileSync("../package.json").toJSON().version;

yargs
  .commandDir("commands")
  .demandCommand()
  .help().argv;

yargs.version(version);

yargs.parse();
