export const getWeatherInfo = async (cityName) => {
  const API_URL = import.meta.env.VITE_WEATHER_API_URL;
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  try {
    const response = await fetch(
      `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data. Check the city name.");
    }
    const jsonResponse = await response.json();
    const result = {
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    return result;
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
  }
};
