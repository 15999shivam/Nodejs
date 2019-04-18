const fs = require("fs");

// const book = {
//   title: "ego is the enamy",
//   author: "ryan holiday"
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// console.log(dataJSON);
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data);
data.name = "shivam";
data.age = 19;
const dataJSON1 = JSON.stringify(data);
fs.writeFileSync("1-json.json", dataJSON1);
