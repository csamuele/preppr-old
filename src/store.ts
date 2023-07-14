import { configureStore } from '@reduxjs/toolkit';
import retaurantReducer from './features/restaurants/restaurantsSlice';
import stationReducer from './features/stations/stationsSlice';
import dishReducer from './features/dishes/dishesSlice';
import componentsReducer from './features/components/componentsSlice';
import tasksReducer from './features/tasks/tasksSlice';
import prepListsReducer from './features/preplists/prepListsSlice';

export const store = configureStore({
  reducer: {
    restaurants: retaurantReducer,
    stations: stationReducer,
    dishes: dishReducer,
    components: componentsReducer,
    tasks: tasksReducer,
    prepLists: prepListsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
