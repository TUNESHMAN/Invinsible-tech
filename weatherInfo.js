const axios = require("axios");
let weatherResult;

function getWeather(cityName) {
  return axios
    .get(
      "http://api.weatherstack.com/current?access_key=d8bc6469d4e4525363fce1dbe9ad3b67&query=" +
        cityName
    )
    .then((response) => {
      if (response.data.success === false) {
        console.log("Please provide a valid location");
      } else {
        weatherResult = {
          time: response.data.location.localtime,
          weather: response.data.current.weather_descriptions,
        };
        console.log(weatherResult);
        return weatherResult;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

getWeather("accra");

module.exports = getWeather;
