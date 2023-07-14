import * as React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import {SelectChangeEvent} from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Select from '../Utils/Select';
import PopupWindow from "../Utils/PopupWindow";
import Button from "@mui/material/Button/Button";
import ComponentsTable from "../Components/ComponentsTable";
import ComponenentsSearch from "../Components/ComponentsSearch";
import {Dish} from "../../types";
import MultiSelect from "../Utils/MultiSelect";
import Option from "../Utils/Option";
import { selectAllStations } from "../../features/stations/stationsSlice";
import { selectComponentsByDish } from "../../features/components/componentsSlice";
import { useSelector } from "react-redux";




interface DishNewEditProps {
  dish: null | Dish;
  open: boolean;
  onClose: () => void;
}

const DishNewEdit: React.FC<DishNewEditProps> = ({ open, onClose, dish }) => {

    const [stations, setStations] = React.useState<number[]>(dish? dish.stations : []);
    const handleStationsChange = (newStations: number[]) => {
      setStations(newStations);
    };
    const [name, setName] = React.useState(dish? dish.name : '');
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };
    const components = useSelector(selectComponentsByDish(dish? dish.dishId : -1));
    const [openComponentsSearch, setOpenComponentsSearch] = React.useState(false);
    const handleOpenComponentsSearch = () => setOpenComponentsSearch(true);
    const handleCloseComponentsSearch = () => setOpenComponentsSearch(false);
    const options: Option[] = useSelector(selectAllStations).map((station): Option => {
      return {value: station.stationId, label: station.name};
    });

    if (!dish) {
      return null;
  }

  
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
            <TextField label="Dish Name" variant="standard" value={name} onChange={handleNameChange}/>
          </Grid>
          <Grid item xs={12}>
            <MultiSelect id={"station-select"} label="Stations" onChange={handleStationsChange} options={options} value={stations}/>
          </Grid>
          <Grid item xs={12}>
            <ComponentsTable componentsList={components}/>
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
