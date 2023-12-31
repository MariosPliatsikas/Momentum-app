// WeatherService.js
import axios from 'axios';

const API_KEY = '0db4de094b4a1d677bd34f5e7dbdf7c0'; // Replace with your actual API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const getWeather = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
