import {Container} from '@mui/material';
import StationsList from './features/StationsList';
import MiniDrawer from './components/Drawer';
import Box  from '@mui/system/Box';
// import { ColorModeContext } from './components/ToggleColorMode';
// import ColorModeToggleButton  from './components/ColorModeToggleButton';
// import { useContext } from 'react';



const App: React.FC = () => {
  // const colorMode = useContext(ColorModeContext);
  return (
    <Box>
      <MiniDrawer header='Stations'>
      <Container>
        {/* <ColorModeToggleButton onToggle={colorMode.toggleColorMode}/> */}
        <StationsList/>
      </Container>
      </MiniDrawer>
    </Box>
  );
};

export default App;
