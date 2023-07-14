import List from '@mui/material/List';
import DishComponent from './DishComponent';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Dish} from '../../types';
import { useSelector } from 'react-redux';
import { selectComponentsByDish } from '../../features/components/componentsSlice';

interface DishComponentsListProps {
    expanded: boolean;
    onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
    dish: Dish;
}

const DishComponentsList: React.FC<DishComponentsListProps> = ({expanded, onChange, dish}) => {
    const selectComponents = selectComponentsByDish(dish.dishId);
    const components = useSelector(selectComponents);
    return (
        <Accordion expanded={expanded} onChange={onChange}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography>{dish.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    {components.map((component) => (
                        <DishComponent key={component.componentId} component={component} />
                    ))}
                </List>
            </AccordionDetails>
        </Accordion>
    )
}

export default DishComponentsList;