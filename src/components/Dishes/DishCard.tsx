import Card from "@mui/material/Card/Card";
import Typography from "@mui/material/Typography/Typography";
import Grid from "@mui/material/Grid/Grid";
import IconButton from "@mui/material/IconButton/IconButton";
import Button from "@mui/material/Button/Button";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import { CheckCircle, Cancel } from "@mui/icons-material";
import Badge from "@mui/material/Badge/Badge";
interface DishCardProps {
  dish: any;
  onEdit: () => void;
}

const DishCard: React.FC<DishCardProps> = ({ dish, onEdit }) => {
  const isActive = dish.isActive;
  const badgeContent = isActive ? (
    <CheckCircle sx={{ marginLeft: 1 }} />
  ) : (
    <Cancel sx={{ marginLeft: 1 }} />
  );
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



          <IconButton onClick={onEdit} color="primary">
            <EditIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>

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
