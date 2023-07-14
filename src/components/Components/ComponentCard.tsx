import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import ComponentNewEdit from './ComponentNewEdit';

interface ComponentCardProps {
    component: {
        componentId: number;
        name: string;
        tasks: {
            taskId: number;
            prepList: string;
            name: string;
            par: string;
        }[];
        dishes: {
            dishId: number;
            name: string;
        }[];
    };
}

const ComponentCard: React.FC<ComponentCardProps> = ({component}) => {
    const [editOpen, setEditOpen] = React.useState(false);
    const handleEditOpen = () => setEditOpen(true);
    const handleEditClose = () => setEditOpen(false);
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper elevation={3}>
                <Box p={2}>
                    <Box display="flex" alignItems="start" justifyContent="space-between">
                        <Typography variant="h5" component="h2">
                            {component.name}
                        </Typography>
                        <IconButton aria-label="edit" color="primary" onClick={handleEditOpen}>
                            <EditIcon />
                        </IconButton>
                        <ComponentNewEdit component={component} open={editOpen} onClose={handleEditClose}/>
                    </Box>
                    <Box>
                        {component.dishes.map((dish) => (
                            <Chip key={dish.dishId} label={dish.name} />
                        ))}
                    </Box>
                    <Box>
                        <Button color="error">Delete</Button>
                    </Box>

                </Box>
            </Paper>
        </Grid>
    );
}

export default ComponentCard;
