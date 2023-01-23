import { Button, Grid } from "@mui/material";
import DatePicker from "./DatePicker/DatePicker";

const InputButtons = () => {
  return (
    <Grid sx={{ display: "flex", gap: 40 }}>
      <DatePicker />
      <Button>Check Out</Button>
      <Button
        sx={{
          width: 150,
          height: 42,
          backgroundColor: "#ffffff",
          borderRadius: 32,
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        Search
      </Button>
    </Grid>
  );
};

export default InputButtons;
