import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import IconButton from "@mui/material/IconButton/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import DishNewEdit from "./DishNewEdit";
import DishCard from "./DishCard";

const columns: GridColDef[] = [
    { field: "dish", headerName: "Dish", flex: 1 },
    { field: "station", headerName: "Station", flex: 1 },
    {
        field: "isActive",
        headerName: "Active",
        width: 100,
        type: "checkbox",
        renderCell: (params) => <Checkbox checked={params.value} />,
    },
    {
        field: "edit",
        headerName: "Edit",
        width: 100,
        type: "button",
        renderCell: (params) => (
            <IconButton>
                <EditIcon />
            </IconButton>
        ),
    },
    {
        field: "delete",
        headerName: "Delete",
        width: 100,
        type: "button",
        renderCell: (params) => (
            <IconButton>
                <DeleteIcon />
            </IconButton>
        ),
    },
];

const rows = [
    { id: 1, dish: "Pork Loin", station: "Flat Top", isActive: true },
    { id: 2, dish: "Lamb Flatbread", station: "Flat Top", isActive: false },
    { id: 3, dish: "Trout", station: "Saute", isActive: true },
];

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
            <Grid item xs={12} lg={3}>
                <TextField
                    label="Search"
                    variant="outlined"
                    onChange={handleSearchChange}
                    fullWidth
                />
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
            <Grid item xs={12} lg={3}>
                <Button onClick={handleOpen}>Create New</Button>
                <DishNewEdit open={open} onClose={handleClose} />
            </Grid>
        </Grid>
    );
};

export default DishesPage;
