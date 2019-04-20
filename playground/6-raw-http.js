const https = require("https");
const url =
  "https://api.darksky.net/forecast/cce55c1034bcc081b0e34b553e4f9562/40,-75";

const request = https.request(url, response => {
  let data = "";
  response.on("data", chunk => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    console.log(JSON.parse(data));
  });
});

request.on("error", error => {
  console.log("an error", error);
});

request.end();
