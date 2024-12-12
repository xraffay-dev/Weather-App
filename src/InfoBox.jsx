import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const IMAGE_URL =
    "https://images.unsplash.com/photo-1609931029519-b0c58e5f69c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
      {/* <Typography variant="h6" gutterBottom>
        Weather Info: {info.weather || "N/A"}
      </Typography> */}
      <Card sx={{ maxWidth: "max", boxShadow: 3, margin: 0 }}>
        <CardMedia
          sx={{ height: 120 }}
          image={IMAGE_URL}
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
