import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox() {
  const IMAGE_URL =
    "https://images.unsplash.com/photo-1609931029519-b0c58e5f69c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let info = {
    city: "Karachi",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "Haze",
  };

  return (
    <div className="InfoBox">
      <Typography variant="h4" gutterBottom>
        Weather Info: {info.weather}
      </Typography>
      <Card sx={{ maxWidth: "max", boxShadow: 3, margin: 0 }}>
        <CardMedia
          sx={{ height: 80 }}
          image={IMAGE_URL}
          title="Weather Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="span">
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}%</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The weather feels like {info.feelslike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
