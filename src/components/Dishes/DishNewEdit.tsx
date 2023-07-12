import * as React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import {SelectChangeEvent} from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Select from '../Utils/Select';
import PopupWindow from "../Utils/PopupWindow";
import Button from "@mui/material/Button/Button";
import ComponentsTable from "../Componenents/ComponentsTable";
import ComponenentsSearch from "../Componenents/ComponentsSearch";

const MockDish = {
  dishId: 1,
  name: "Hangar Steak",
  station: "Flat Top",
  components: [
    {
      componentId: 1,
      name: "Hangar Steak",
      dishes: [
        {
          dishId: 1,
          name: "Hangar Steak",
        }
      ],
      tasks: [
        {
          taskId: 1,
          prepList: "Next Door",
          name: "Stock Hangar Steak",
          par: "20ea",
        }
      ]
    },
    {
      componentId: 2,
      name: "Corn Puree",
      dishes: [
        {
          dishId: 1,
          name: "Hangar Steak",
        },
        {
          dishId: 2,
          name: "Corn Pasta",
        }
      ],
      tasks: [
        {
          taskId: 2,
          prepList: "Prep 1",
          name: "Make Corn Puree",
          par: "6qts"
        },
        {
          taskId: 3,
          prepList: "Flat Top",
          name: "Stock Corn Puree",
          par: "2qts"
        },
        {
          taskId: 4,
          prepList: "Sautee",
          name: "Stock Corn Puree",
          par: "2qts"
        }
      ]
    },
    {
      componentId: 3,
      name: "Corn Bread",
      dishes: [
        {
          dishId: 1,
          name: "Hangar Steak",
        }
      ],
      tasks: [
        {
          taskId: 5,
          prepList: "Prep 1",
          name: "Corn Bread Kits",
          par: "6ea"
        },
        {
          taskId: 6,
          prepList: "Flat Top",
          name: "Stock Corn Bread",
          par: "20pcs",
        }
      ]
    }
  ]
};


interface DishNewEditProps {
  open: boolean;
  onClose: () => void;
}

const DishNewEdit: React.FC<DishNewEditProps> = ({ open, onClose }) => {
    const [station, setStation] = React.useState(MockDish.station);
    const [openComponentsSearch, setOpenComponentsSearch] = React.useState(false);
    const handleOpenComponentsSearch = () => setOpenComponentsSearch(true);
    const handleCloseComponentsSearch = () => setOpenComponentsSearch(false);
    const handleChange = (event: SelectChangeEvent) => {
      setStation(event.target.value as string);
    };
  return (
    <PopupWindow
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      lg={550}
    >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField label="Dish Name" variant="standard" />
          </Grid>
          <Grid item xs={12}>
            <Select id="station-select" value={station} label="Station" onChange={handleChange}>
              <MenuItem value={"pantry"}>Pantry</MenuItem>
              <MenuItem value={"saute"}>Saute</MenuItem>
              <MenuItem value={"flat-top"}>Flat Top</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <ComponentsTable componentsList={MockDish.components}/>
            <Button onClick={handleOpenComponentsSearch}>Add Component</Button>
            <ComponenentsSearch open={openComponentsSearch} onClose={handleCloseComponentsSearch}/>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={onClose}>Save</Button>
          </Grid>
        </Grid>
    </PopupWindow>
  );
};

export default DishNewEdit;
