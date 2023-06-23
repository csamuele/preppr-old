import {Container} from '@mui/material';
import StationsList from './components/Stations/StationsList';
import MiniDrawer from './components/Drawer';
import Box  from '@mui/system/Box';

const App: React.FC = () => {
  return (
    <Box>
      <MiniDrawer header='Stations'>
      <Container>
        <StationsList/>
      </Container>
      </MiniDrawer>
    </Box>
  );
};

export default App;
