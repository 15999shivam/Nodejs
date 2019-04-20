const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your Notes...";
};
const addNote = (title, body) => {
  const notes = loadNotes();
  //const duplicateNotes = notes.filter(note => title === note.title);
  const duplicateNote = notes.find(note => title === note.title);

  debugger;

  if (!duplicateNote) {
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

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    return data;
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const removeNote = title => {
  const notes = loadNotes();
  const filteredNotes = notes.filter(note => note.title !== title);
  if (filteredNotes.length === notes.length) {
    console.log(chalk.bgRed("No Note Found"));
  } else {
    console.log(chalk.bgGreen("Note Removed"));
    saveNotes(filteredNotes);
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes"));
  notes.forEach(note => console.log(note.title));
};

const readNotes = title => {
  const notes = loadNotes();
  const note = notes.find(note => title === note.title);
  if (note) {
    console.log(chalk.green.bold.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note Not Found"));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes
};
