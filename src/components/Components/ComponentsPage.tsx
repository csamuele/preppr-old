import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ComponentCard from './ComponentCard';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { selectAllComponents } from '../../features/components/componentsSlice';


const ComponentsPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Handle search functionality
        console.log(event.target.value);
    };
    const components = useSelector(selectAllComponents);
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    label="Search"
                    variant="outlined"
                    onChange={handleSearchChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <Button>New Component</Button>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Grid container spacing={2}>
                        {components.map((component) => (
                            <ComponentCard key={component.componentId} component={component} />
                        ))}
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}

export default ComponentsPage;