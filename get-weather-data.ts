import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const latitude = process.env.LATITUDE;
const longitude = process.env.LONGITUDE;
const appid = process.env.OPEN_WEATHER_MAP_APPID;

const getWeatherData = () => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=&appid=${appid}&units=metric`
    )
    .then((data) => {
      console.log(JSON.stringify(data.data.hourly, null, 2));
    });
};

getWeatherData();
