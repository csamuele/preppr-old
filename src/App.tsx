import StationsList from './components/Stations/StationsList';
import DishesTable from './components/Dishes/DishesTable';
import Root from './layout/Root';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path="stations" element={<StationsList />}/>
    <Route path="dishes" element={<DishesTable/>}/>
  </Route>,

));

const App: React.FC = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
