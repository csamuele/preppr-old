import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function DishComponent() {
    return (
        <ListItem>
            <ListItemButton>
                <ListItemText primary="Component" />
            </ListItemButton>
        </ListItem>
    )
}