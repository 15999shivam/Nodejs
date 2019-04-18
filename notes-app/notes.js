const fs = require("fs");
const chalk = require("chalk");

const getNotes = function() {
  return "Your Notes...";
};
const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function(note) {
    return title === note.title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note Title taken"));
  }
};

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    return data;
  } catch (e) {
    return [];
  }
};

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const removeNote = function(title) {
  const notes = loadNotes();
  const filteredNotes = notes.filter(function(note) {
    return note.title !== title;
  });
  if (filteredNotes.length === notes.length) {
    console.log(chalk.bgRed("No Note Found"));
  } else {
    console.log(chalk.bgGreen("Note Removed"));
    saveNotes(filteredNotes);
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
