import Card from "@mui/material/Card/Card";
import Typography from "@mui/material/Typography/Typography";
import Grid from "@mui/material/Grid/Grid";
import IconButton from "@mui/material/IconButton/IconButton";
import Button from "@mui/material/Button/Button";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import {useState} from "react";
import { CheckCircle, Cancel } from "@mui/icons-material";
import { Dish } from '../../types'
import { useSelector } from "react-redux";
import { selectStationsByDish } from "../../features/stations/stationsSlice";
import DishNewEdit from "./DishNewEdit";
interface DishCardProps {
  dish: Dish;
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  const stations = useSelector(selectStationsByDish(dish.dishId));
  const isActive = true
  const badgeContent = isActive ? (
    <CheckCircle sx={{ marginLeft: 1 }} />
  ) : (
    <Cancel sx={{ marginLeft: 1 }} />
  );
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ p: 2, position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <Typography variant="h5" component="h2">
            {dish.name}
          </Typography>



          <IconButton onClick={handleOpen} color="primary">
            <EditIcon />
          </IconButton>
          <DishNewEdit dish={dish} open={open} onClose={handleClose} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
            {stations.map((station) => (
              <Chip key={station.stationId} label={station.name} />
            ))}
        </Box>

        <Button color="error">Delete</Button>
      </Card>
    </Grid>
  );
};

export default DishCard;
