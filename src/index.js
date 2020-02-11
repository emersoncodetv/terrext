const yargs = require("yargs");

const paths = require("@commands/paths");
const resources = require("@commands/resources");
const tags = require("@commands/tags");

yargs.version("0.0.10-alpha")

yargs.command(paths);
yargs.command(resources);
yargs.command(tags);

yargs.help().argv;

yargs.parse();
