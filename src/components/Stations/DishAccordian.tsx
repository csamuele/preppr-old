import Box from '@mui/material/Box';
import DishComponentsList from './DishComponentsList';
import React from 'react';

export default function DishAccordian() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };
  return (
    <Box>
        <DishComponentsList expanded={expanded === 'panel1'} onChange={handleChange('panel1')}/>
        <DishComponentsList expanded={expanded === 'panel2'} onChange={handleChange('panel2')}/>
        <DishComponentsList expanded={expanded === 'panel3'} onChange={handleChange('panel3')}/>
        <DishComponentsList expanded={expanded === 'panel4'} onChange={handleChange('panel4')}/>
    </Box>
  );
}