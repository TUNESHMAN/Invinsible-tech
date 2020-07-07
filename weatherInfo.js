const axios = require("axios");
var result;

function getWeather(cityName) {
  return axios
    .get(
      "http://api.weatherstack.com/current?access_key=d8bc6469d4e4525363fce1dbe9ad3b67&query=" +
        cityName
    )
    .then((response) => {
      if (response.data.success === false) {
        console.log("Please provide a valid location");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
