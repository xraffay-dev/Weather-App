import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { getWeatherInfo } from "./weatherApi.js";

export default function SearchBox({ updateInfo }) {
  const [cityName, setCity] = useState("");

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const currentWeather = await getWeatherInfo(cityName);
    setCity("");
    updateInfo(currentWeather);
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="City"
          label="City"
          variant="outlined"
          required
          value={cityName}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>
    </div>
  );
}
