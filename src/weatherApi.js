export const getWeatherInfo = async (cityName) => {
  const API_URL = import.meta.env.VITE_WEATHER_API_URL;
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  try {
    const response = await fetch(
      `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("No such city/country exists");
      }
      throw new Error("Failed to fetch weather data");
    }
    const jsonResponse = await response.json();
    return {
      city: cityName,
      temp: jsonResponse.main.temp || "N/A",
      tempMin: jsonResponse.main.temp_min || "N/A",
      tempMax: jsonResponse.main.temp_max || "N/A",
      humidity: jsonResponse.main.humidity || "N/A",
      feelsLike: jsonResponse.main.feels_like || "N/A",
      weather: jsonResponse.weather[0].description || "N/A",
    };
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    return { error: error.message }; 
  }
};
