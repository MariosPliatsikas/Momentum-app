// WeatherService.js
import axios from 'axios';

const API_KEY = 'Kajw75a7yQ5PezhkYqGiTokvX982uVnB'; // Replace with your actual API key
const BASE_URL = 'https://developer.accuweather.com//user/me/apps';

export const getWeather = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
