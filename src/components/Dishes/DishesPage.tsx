import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DishNewEdit from "./DishNewEdit";
import DishCard from "./DishCard";
import { useSelector, useDispatch } from "react-redux";
import { selectDishesBySearchTerm, createDish, addDish } from "../../features/dishes/dishesSlice";
import { Dish } from "../../types";
import { RootState } from "../../store";



const DishesPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = React.useState<string | null>(null);
    const allDishes = useSelector((state: RootState) => selectDishesBySearchTerm(state, searchTerm));
    const dispatch = useDispatch();
    const [newDish, setNewDish] = React.useState<null | Dish>(null);
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Handle search functionality
        setSearchTerm(event.target.value);
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        const dish = createDish();
        dispatch(addDish(dish));
        setNewDish(dish);
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} lg={12}>
                <TextField
                    label="Search"
                    variant="outlined"
                    onChange={handleSearchChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} lg={3}>
                <Button onClick={handleOpen}>New Dish</Button>
                <DishNewEdit open={open} onClose={handleClose} dish={newDish}/>
            </Grid>
            <Grid item container spacing={2} xs={12}>
                {allDishes.map((dish) => {
                    return <DishCard key={dish.dishId} dish={dish}/>;
                })}
            </Grid>
        </Grid>
    );
};

export default DishesPage;
