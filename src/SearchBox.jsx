import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox() {
  return (
    <div className="SearchBox">
      <form>
        <TextField id="City" label="City" variant="outlined" required />
        <Button variant="contained">Search</Button>
      </form>
    </div>
  );
}
