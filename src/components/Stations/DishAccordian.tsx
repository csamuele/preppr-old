import Box from '@mui/material/Box';
import DishComponentsList from './DishComponentsList';
import React from 'react';

import { Dish } from '../../types';

interface DishAccordianProps {
    dishes: Dish[];
}

const DishAccordian:React.FC<DishAccordianProps> = ({dishes}) => {
    const [expanded, setExpanded] = React.useState<number | false>(false);

    const handleChange =
      (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };
  return (
    <Box>
        {dishes.map((dish) => (
            <DishComponentsList key={dish.dishId} dish={dish} expanded={expanded=== dish.dishId} onChange={handleChange(dish.dishId)}/>

        ))}

    </Box>
  );
}

export default DishAccordian;