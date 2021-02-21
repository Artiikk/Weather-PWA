import axios from 'axios'

// import dotenv from 'dotenv'
// dotenv.config()

export const fetchWeather = async (query) => {
  return await axios.get(process.env.REACT_APP_API_URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: process.env.REACT_APP_API_KEY
    }
  });
}