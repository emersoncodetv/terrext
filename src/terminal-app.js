const yargs = require("yargs");

// const notes = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "tags",
  describe: "Add a new note",
  builder: {
    show: {
      describe: "Muesta todos los tags de un archivo terraform json",
      demandOption: false,
      type: "boolean",
      default: false
    }
    // body: {
    //   describe: "Note body to save",
    //   demandOption: true,
    //   type: "string"
    // }
  },
  handler(argv) {
    console.log(argv);
    // notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title to remove",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    // notes.removeNote(argv.title);
  }
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a file of notes and print it",
  builder: {
    title: {
      describe: "Title of your note to show",
      type: "string",
      demandOption: true
    }
  },
  handler(argv) {
    // notes.readNote(argv.title);
    // console.log(notes.getNotes());
  }
});

// Create list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler() {
    // notes.listNotes();
  }
});

// add, remove, read, list

// console.log(yargs.argv);

module.exports = yargs;
