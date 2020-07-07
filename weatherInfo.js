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
      } else {
        result = {
          time: response.data.location.localtime,
          weather: response.data.current.weather_descriptions,
        };
        console.log(result);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

getWeather("abuja");
