import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Select, {SelectChangeEvent} from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import FormControl from "@mui/material/FormControl/FormControl";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface DishNewEditProps {
  open: boolean;
  onClose: () => void;
}

const DishNewEdit: React.FC<DishNewEditProps> = ({ open, onClose }) => {
    const [station, setStation] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setStation(event.target.value as string);
    };
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField label="Dish Name" variant="standard" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <FormControl fullWidth>
            <InputLabel id="station-label">Station</InputLabel>
            <Select labelId="station-label" id="station-select" value={station} label="Station" onChange={handleChange}>
              <MenuItem value={"pantry"}>Pantry</MenuItem>
              <MenuItem value={"saute"}>Saute</MenuItem>
              <MenuItem value={"flat-top"}>Flat Top</MenuItem>
            </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default DishNewEdit;
