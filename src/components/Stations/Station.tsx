import { Grid, Card, Typography, Button } from '@mui/material';
import DishAccordian from './DishAccordian';

const Station = () => {
    return (
        <Grid item xs={12} lg={4} md={4}>
            <Card sx={{p: 2}}>
                <Typography variant='h5' component='h2'>Station</Typography>
                <DishAccordian/>
                <Button>View Checklist</Button>
            </Card>
        </Grid> 
    );
}

export default Station;