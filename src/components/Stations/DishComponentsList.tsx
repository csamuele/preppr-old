import List from '@mui/material/List';
import DishComponent from './DishComponent';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';

interface DishComponentsListProps {
    expanded: boolean;
    onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

const DishComponentsList: React.FC<DishComponentsListProps> = ({expanded, onChange}) => {

    return (
        <Accordion expanded={expanded} onChange={onChange}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography>Dish</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    <DishComponent/>
                    <DishComponent/>
                    <DishComponent/>
                </List>
            </AccordionDetails>
        </Accordion>
    )
}

export default DishComponentsList;