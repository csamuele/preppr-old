import { Button, Grid, IconButton, MenuItem, Tab, TableContainer, Typography } from "@mui/material";
import PopupWindow from "../Utils/PopupWindow";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import { Add, Delete } from "@mui/icons-material";
import TaskCard from "../Tasks/TaskCard";
import Box from "@mui/material/Box";

interface ComponentNewEditProps {
    open: boolean;
    onClose: () => void;
    component: {
        componentId: number;
        name: string;
        dishes: {
            dishId: number;
            name: string;
        }[];
        tasks: {
            taskId: number;
            prepList: string;
            name: string;
            par: string;
        }[];
    }
};

const ComponentNewEdit: React.FC<ComponentNewEditProps> = ({ open, onClose, component }) => {
    return (
        <PopupWindow open={open} onClose={onClose} lg={800}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField label="Name" variant="standard" value={component.name} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6">Dishes</Typography>
                    {component.dishes.map((dish) => (
                        <Chip key={dish.dishId} label={dish.name} />
                    ))}
                    <IconButton aria-label="add" onClick={() => { }}>
                        <Add />
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    <Button>Add Task</Button>
                    <Box maxHeight="50vh" overflow="auto">
                        <Grid container spacing={2}>
                            {component.tasks.map((task) => (

                                <TaskCard task={task} key={task.taskId} />
                            ))

                            }
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Button aria-label="save" onClick={onClose}>Save</Button>
                </Grid>

            </Grid>

        </PopupWindow>
    );
};

export default ComponentNewEdit;