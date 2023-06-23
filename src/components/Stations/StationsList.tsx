import { Grid } from '@mui/material'
import React from 'react'
import Station from './Station'

const StationsList = () => {
    return (
        <Grid container spacing={3}>
            <Station/>
            <Station/>
            <Station/>
        </Grid>
    );
}

export default StationsList;