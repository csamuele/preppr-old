import { Button, Grid, MenuItem, Paper, TextField } from "@mui/material";
import Select from '../Utils/Select';
import React, { useState } from "react";
import { Task } from "../../types";
import { useSelector } from "react-redux";
import { selectAllPrepLists } from "../../features/preplists/prepListsSlice";
import Option  from "../Utils/Option";

interface TaskCardProps {
    task: Task;
    onEdit?: () => void;
    onDelete?: () => void;
};


const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete }) => {
    const [prepList, setPrepList] = useState(task.prepList);
    const handleChange = (value: number) => {
        setPrepList(value as number);
      };
    const options: Option[] = useSelector(selectAllPrepLists).map((prepList): Option => {
        return {
            value: prepList.prepListId,
            label: prepList.name
        };
    });
    return (

        <Grid item xs={12} md={4}>
            <Paper sx={{ padding: 2 }}>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField label="Task" variant="standard" value={task.name} />
                </Grid>
                <Grid item xs={12}>
                    <Select id="preplist-select" label="Prep List" options={options} value={prepList} onChange={handleChange} />
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