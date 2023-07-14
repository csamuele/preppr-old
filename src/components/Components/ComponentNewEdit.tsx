import { Button, Grid, IconButton, Typography } from "@mui/material";
import PopupWindow from "../Utils/PopupWindow";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Add from "@mui/icons-material/Add";
import TaskCard from "../Tasks/TaskCard";
import Box from "@mui/material/Box";
import { Component } from "../../types";
import { useSelector } from "react-redux";
import { selectDishesByComponent } from "../../features/dishes/dishesSlice";
import { selectTasksByComponent } from "../../features/tasks/tasksSlice";

interface ComponentNewEditProps {
    open: boolean;
    onClose: () => void;
    component: Component
};

const ComponentNewEdit: React.FC<ComponentNewEditProps> = ({ open, onClose, component }) => {
    const dishes = useSelector(selectDishesByComponent(component.componentId));
    const tasks = useSelector(selectTasksByComponent(component.componentId));
    return (
        <PopupWindow open={open} onClose={onClose} md={800}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField label="Name" variant="standard" value={component.name} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6">Dishes</Typography>
                    {dishes.map((dish) => (
                        <Chip key={dish.dishId} label={dish.name} />
                    ))}
                    <IconButton aria-label="add" onClick={() => { }}>
                        <Add />
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    <Button>Add Task</Button>
                    <Box maxHeight="55vh" overflow="auto" p={1}>
                        <Grid container spacing={2}>
                            {tasks.map((task) => (

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