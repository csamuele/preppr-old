import Card from "@mui/material/Card/Card";
import Typography from "@mui/material/Typography/Typography";
import Grid from "@mui/material/Grid/Grid";
import IconButton from "@mui/material/IconButton/IconButton";
import Button from "@mui/material/Button/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import { CheckCircle, Cancel } from "@mui/icons-material";

interface DishCardProps {
  dish: any;
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  const isActive = dish.isActive;

  return (
    <Grid item xs={12} lg={4}>
      <Card sx={{ p: 2, position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 1
          }}
        >
          <IconButton>
            <EditIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h5" component="h2">
            {dish.name}
          </Typography>
          {isActive ? (
            <CheckCircle sx={{ marginLeft: 1}} />
          ) : (
            <Cancel sx={{ marginLeft: 1}} />
          )}
        </Box>
        <Typography variant="h6" component="h3">
          {dish.station}
        </Typography>
          <Button color="error">Delete</Button>
      </Card>
    </Grid>
  );
};

export default DishCard;
