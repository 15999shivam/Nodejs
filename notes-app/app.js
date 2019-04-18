const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

//customise yargs version
yargs.version("1.1.0");

//ceate add command
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demand: true,
      type: "string"
    },
    body: {
      describe: "Note Body",
      demand: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

//create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title",
      demand: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.removeNote(argv.title);
  }
});

//create read command
yargs.command({
  command: "read",
  describe: "read the note",
  handler: function() {
    console.log("reading the note");
  }
});

//create list command
yargs.command({
  command: "list",
  describe: "list all notes",
  handler: function() {
    console.log("listing all notes");
  }
});
//add,remove,read,list
// console.log(process.argv);
yargs.parse();
// console.log(yargs.argv);
