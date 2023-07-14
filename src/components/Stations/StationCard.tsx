import { Grid, Paper, Typography, Button } from '@mui/material';
import DishAccordian from './DishAccordian';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { Station } from '../../types';
import { useSelector } from 'react-redux';
import { selectDishByStation } from '../../features/dishes/dishesSlice';

interface StationCardProps {
    station: Station;
}


const StationCard: React.FC<StationCardProps> = ({station}) => {
    
    const selectDishes = selectDishByStation(station.stationId);
    const dishes = useSelector(selectDishes);
    

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <Typography variant='h5' component='h2'>{station.name}</Typography>
                    <IconButton aria-label='edit' color='primary'>
                        <EditIcon />
                    </IconButton>
                </Box>
                <DishAccordian dishes={dishes}/>
                <Button>View Checklist</Button>

            </Paper>
        </Grid>
    );
}

export default StationCard;