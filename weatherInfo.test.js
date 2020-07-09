const axios = require("axios");

jest.mock("axios");
const getWeather = require("./weatherInfo");
test("accra weather details ", async () => {
  const accraWeather = { time: "2020-07-09 12:09", weather: ["Partly cloudy"] };
  const resp = { data: accraWeather };
  axios.get.mockImplementationOnce(()=>{Promise.resolve(resp)});
  const weatherReport = await  getWeather("accra")
    expect(weatherReport).toBe(resp);
});

