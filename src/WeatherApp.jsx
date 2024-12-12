import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Karachi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "Haze",
  });

  const updateInfo = (newInfo) => {
    if (newInfo?.error) {
      alert(newInfo.error);
    } else {
      setWeatherInfo(newInfo);
    }
  };

  return (
    <>
      <InfoBox info={weatherInfo} />
      <SearchBox updateInfo={updateInfo} />
    </>
  );
}
