import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const CLOUD_URL =
  "https://images.unsplash.com/photo-1718917911083-7c830776e337?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const SUN_URL =
    "https://images.unsplash.com/photo-1704104253303-8611ca48c1cf?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
  "https://images.unsplash.com/photo-1641732423736-2c9ebb3e8338?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: "100%", boxShadow: 3, margin: 0 }}>
        <CardMedia
          sx={{ height: 120 }}
          image={
            info.humidity > 80 ? CLOUD_URL : info.temp < 15 ? COLD_URL : SUN_URL
          }
          title="Weather Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {info.city || "Unknown City"}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="span">
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}%</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>
              The weather can be described as <i>{info.weather}</i> <br /> and
              feels like {info.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
