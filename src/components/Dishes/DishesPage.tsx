import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DishNewEdit from "./DishNewEdit";
import DishCard from "./DishCard";



const DishesPage: React.FC = () => {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Handle search functionality
        console.log(event.target.value);
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
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
                <DishNewEdit open={open} onClose={handleClose} />
            </Grid>
            <Grid item container spacing={2} xs={12}>
                {[
                    {
                        name: "Pork Loin",
                        station: "Flat Top",
                        isActive: true,
                    },
                    {
                        name: "Lamb Flatbread",
                        station: "Flat Top",
                        isActive: false,
                    },
                    {
                        name: "Trout",
                        station: "Saute",
                        isActive: true,
                    },

                ].map((dish) => {
                    return <DishCard dish={dish} onEdit={handleOpen}/>;
                })}
            </Grid>
        </Grid>
    );
};

export default DishesPage;
