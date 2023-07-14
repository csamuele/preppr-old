import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Component} from '../../types';

interface DishComponentProps {
    component: Component;
}

const DishComponent:React.FC<DishComponentProps> = ({component}) => {
    return (
        <ListItem>
            <ListItemButton>
                <ListItemText primary={component.name} />
            </ListItemButton>
        </ListItem>
    )
}

export default DishComponent;