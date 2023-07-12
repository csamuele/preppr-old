import { Button, Grid, MenuItem, Paper, TextField } from "@mui/material";
import Select from '../Utils/Select';
import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select/Select";

interface TaskCardProps {
    task: {
        taskId: number;
        prepList: string;
        name: string;
        par: string;
    };
    onEdit?: () => void;
    onDelete?: () => void;
};


const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete }) => {
    const [prepList, setPrepList] = useState(task.prepList);
    const handleChange = (event: SelectChangeEvent) => {
        setPrepList(event.target.value as string);
      };
    return (

        <Grid item xs={12} md={4}>
            <Paper sx={{ padding: 2 }}>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField label="Task" variant="standard" value={task.name} />
                </Grid>
                <Grid item xs={12}>
                    <Select id="preplist-select" label="Prep List" value={prepList} onChange={handleChange}>
                        <MenuItem value="Prep 1">Prep 1</MenuItem>
                        <MenuItem value="Prep 2">Prep 2</MenuItem>
                        <MenuItem value="Flat Top">Flat Top</MenuItem>
                        <MenuItem value="Sautee">Sautee</MenuItem>
                        <MenuItem value="Next Door">Next Door</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Par" variant="standard" value={task.par} />
                </Grid>
                <Grid item xs={12}>
                    <Button aria-label="delete" color="error">Delete</Button>
                </Grid>
                </Grid>
            </Paper>

        </Grid>

    )
}

export default TaskCard;