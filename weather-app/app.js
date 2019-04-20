const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const url =
  "https://api.darksky.net/forecast/cce55c1034bcc081b0e34b553e4f9562/37.8267";

if (process.argv[2]) {
  geocode(process.argv[2], (error, { longitude, latitude, location }) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
} else {
  console.log("provide location");
}
