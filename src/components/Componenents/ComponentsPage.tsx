import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ComponentCard from './ComponentCard';
import Button from '@mui/material/Button';



const MockComponents = [
    {
        componentId: 1,
        name: "Hangar Steak",
        dishes: [
            {
                dishId: 1,
                name: "Hangar Steak",
            }
        ],
        tasks: [
            {
                taskId: 1,
                prepList: "Next Door",
                name: "Stock Hangar Steak",
                par: "20ea",
            }
        ]
    },
    {
        componentId: 2,
        name: "Corn Puree",
        dishes: [
            {
                dishId: 1,
                name: "Hangar Steak",
            },
            {
                dishId: 2,
                name: "Corn Pasta",
            }
        ],
        tasks: [
            {
                taskId: 2,
                prepList: "Prep 1",
                name: "Make Corn Puree",
                par: "6qts"
            },
            {
                taskId: 3,
                prepList: "Flat Top",
                name: "Stock Corn Puree",
                par: "2qts"
            },
            {
                taskId: 4,
                prepList: "Sautee",
                name: "Stock Corn Puree",
                par: "2qts"
            }
        ]
    },
    {
        componentId: 3,
        name: "Corn Bread",
        dishes: [
            {
                dishId: 1,
                name: "Hangar Steak",
            }
        ],
        tasks: [
            {
                taskId: 5,
                prepList: "Prep 1",
                name: "Make Corn Bread",
                par: "6qts"
            },
            {
                taskId: 6,
                prepList: "Flat Top",
                name: "Stock Corn Bread",
                par: "2qts"
            },
            {
                taskId: 7,
                prepList: "Sautee",
                name: "Stock Corn Bread",
                par: "2qts"
            }
        ]
    }
]
const ComponentsPage: React.FC = () => {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Handle search functionality
        console.log(event.target.value);
    };

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
                        {MockComponents.map((component) => (
                            <ComponentCard key={component.componentId} component={component} />
                        ))}
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}

export default ComponentsPage;