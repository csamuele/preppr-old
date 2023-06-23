import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import {
    Link as RouterLink,
    LinkProps as RouterLinkProps,

} from 'react-router-dom';



interface ListItemLinkProps {
    icon: React.ReactElement;
    primary: string;
    to: string;
    open: boolean;
    key: string;
}

const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
    itemProps,
    ref,
) {
    return <RouterLink ref={ref} {...itemProps} role={undefined} />;
});

function ListItemLink(props: ListItemLinkProps) {
    const { icon, primary, to, open, key } = props;

    return (
        <ListItem key={key} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
                component={Link}
                to={to}
                sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                }}
            >
                <ListItemIcon
                    sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    }}
                >{icon}</ListItemIcon>
                <ListItemText primary={primary} sx={{ opacity: open ? 1 : 0 }}/>
            </ListItemButton>
        </ListItem>
    );
}

export default ListItemLink;