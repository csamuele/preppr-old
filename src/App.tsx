import StationsPage from './components/Stations/StationsPage';
import DishesPage from './components/Dishes/DishesPage';
import ComponentsPage from './components/Components/ComponentsPage';
import DownloadPage from './components/Download/DownloadPage';
import Root from './layout/Root';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path="stations" element={<StationsPage />}/>
    <Route path="dishes" element={<DishesPage/>}/>
    <Route path="components" element={<ComponentsPage/>}/>
    <Route path="download" element={<DownloadPage/>}/>
  </Route>,

));

const App: React.FC = () => {
  return (
      <RouterProvider router={router}/>
  );
};

export default App;
