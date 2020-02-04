const yargs = require("yargs");

const paths = require("./commands/paths");
const resources = require("./commands/resources");
const tags = require("./commands/tags");

yargs.command(paths);
yargs.command(resources);
yargs.command(tags);

yargs.help().argv;

yargs.parse();
