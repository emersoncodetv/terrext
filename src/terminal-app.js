const yargs = require("yargs");
const findTerraformFiles = require("./_fs/find-all-tf-json-files");
const resources = require("./commands/resources");

// Customize yargs version
yargs.version("0.0.1a");

yargs.command({
  command: "resources",
  describe: "Lista los resources con sus respectivos nombres",
  builder: {
    file: {
      describe: "Path a un archivo de terraform con extención *.tf.json",
      type: "string",
      // demandOption: true,
      conflicts: "folder"
    }
  },
  handler(argv) {
    console.log(resources(argv.file));
  }
});

yargs.command({
  command: "tags",
  describe: "Lista los tags de todos los recursos de un archivo de terraform",
  builder: {
    file: {
      describe: "Path a un archivo de terraform con extención *.tf.json",
      type: "string",
      // demandOption: true,
      conflicts: "folder"
    }
  },
  handler(argv) {
    console.log(argv);
    // notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "validate",
  describe: "Read a file of notes and print it",
  builder: {
    file: {
      describe: "Path a un archivo de terraform con extención *.tf.json",
      type: "string",
      // demandOption: true,
      conflicts: "folder"
    },
    folder: {
      describe: "Title of your note to show",
      type: "string",
      // demandOption: true,
      conflicts: "file"
    }
  },
  handler(argv) {
    console.log(argv);
    // notes.readNote(argv.title);
    // console.log(notes.getNotes());
  }
});

yargs.command({
  command: "paths",
  describe:
    "Lista todos los realpath de cada archivo .tf.json en un directorio específico",
  builder: {
    folder: {
      alias: "f",
      describe: "Directorio proyecto Terraform | *.tf.json |",
      type: "string",
      demandOption: true
    }
  },
  handler(argv) {
    console.log(findTerraformFiles(argv.folder));
  }
});

module.exports = yargs;
