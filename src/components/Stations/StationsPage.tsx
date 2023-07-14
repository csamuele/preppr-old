import { Grid } from '@mui/material'
import React from 'react'
import StationCard from './StationCard'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { useSelector } from 'react-redux'
import { selectAllStations } from '../../features/stations/stationsSlice'

const StationsPage = () => {
    const allStations = useSelector(selectAllStations);
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Handle search functionality
        console.log(event.target.value);
    };

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
                <Button>New Station</Button>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Grid container spacing={2}>
                        {allStations.map((station) => (
                            <StationCard key={station.stationId} station={station} />
                        ))}
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}

export default StationsPage;