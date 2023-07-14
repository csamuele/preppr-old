import { configureStore } from '@reduxjs/toolkit';
import retaurantReducer from './features/restaurants/restaurantsSlice';
import stationReducer from './features/stations/stationsSlice';
import dishReducer from './features/dishes/dishesSlice';
import componentsReducer from './features/components/componentsSlice';

const store = configureStore({
  reducer: {
    restaurants: retaurantReducer,
    stations: stationReducer,
    dishes: dishReducer,
    components: componentsReducer,
  },
});

export default store;
