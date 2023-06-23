import { Grid, Card, Typography } from '@mui/material';
import DishAccordian from './DishAccordian';

const Station = () => {
    return (
        <Grid item xs={4}>
            <Card sx={{p: 2}}>
                <Typography variant='h4' component='h2'>Station</Typography>
                <DishAccordian/>
            </Card>
        </Grid> 
    );
}

export default Station;