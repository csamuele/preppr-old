import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ColorModeContext } from './ToggleColorMode';
import ColorModeToggleButton from './ColorModeToggleButton';
import { useContext } from 'react';
import CountertopsIcon from '@mui/icons-material/Countertops';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import WidgetsIcon from '@mui/icons-material/Widgets';
import DownloadIcon from '@mui/icons-material/Download';
import { Outlet, useLocation } from 'react-router-dom';
import ListItemLink from './ListItemLink';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function Root() {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/stations':
        return 'Stations';
      case '/dishes':
        return 'Dishes';
      case '/components':
        return 'Components';
      case '/downloads':
        return 'Downloads';
      default:
        return 'Other Title';
    }
  };
  const colorMode = useContext(ColorModeContext);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false); // Set initial state to false

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Check screen size on component mount and set the initial state of the drawer accordingly
  React.useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= theme.breakpoints.values.lg);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Call handleResize initially to set the initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [theme.breakpoints.values.lg]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap component="div" sx={{ flexGrow: 1 }}>
            {getPageTitle()}
          </Typography>
          <ColorModeToggleButton onToggle={colorMode.toggleColorMode} />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            {
              name: 'Stations',
              icon: <CountertopsIcon />,
            },
            {
              name: 'Dishes',
              icon: <DinnerDiningIcon />,
            },
            {
              name: 'Components',
              icon: <WidgetsIcon />,
            },
            {
              name: 'Download',
              icon: <DownloadIcon />,
            },
          ].map((item) => (
            <ListItemLink key={item.name} to={item.name.toLowerCase()} primary={item.name} icon={item.icon} open={open} />
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Container>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}
