//Create a redux slice for dishes where each dish has a dishId number, a name, a list of stations, and a list of components.

import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { Dish } from '../../types';
import { mockDishes } from '../../mockData';


interface DishesState {
    dishes: Dish[];
}

const initialState: DishesState = {
    dishes: mockDishes,
};

const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
        addDish: (state, action: PayloadAction<Dish>) => {
            state.dishes.push(action.payload);
        },
        //reducer for removeDish
        removeDish: (state, action: PayloadAction<number>) => {
            state.dishes = state.dishes.filter(dish => dish.dishId !== action.payload);
        },
        //reducer for updateDishName
        updateDishName: (state, action: PayloadAction<{ dishId: number; name: string }>) => {
            const { dishId, name } = action.payload;
            const dish = state.dishes.find(dish => dish.dishId === dishId);
            if (dish) {
                dish.name = name;
            }
        },
        //make reducer for addStationToDish
        addStationToDish: (state, action: PayloadAction<{ dishId: number; station: number }>) => {
            const { dishId, station } = action.payload;
            const dish = state.dishes.find(dish => dish.dishId === dishId);
            if (dish) {
                dish.stations.push(station);
            }
        },
        //make reducer for removeStationFromDish
        removeStationFromDish: (state, action: PayloadAction<{ dishId: number; station: number }>) => {
            const { dishId, station } = action.payload;
            const dish = state.dishes.find(dish => dish.dishId === dishId);
            if (dish) {
                dish.stations = dish.stations.filter(st => st !== station);
            }
        },
        //make reducer for addComponentToDish
        addComponentToDish: (state, action: PayloadAction<{ dishId: number; component: number }>) => {
            const { dishId, component } = action.payload;
            const dish = state.dishes.find(dish => dish.dishId === dishId);
            if (dish) {
                dish.components.push(component);
            }
        },
        //make reducer for removeComponentFromDish
        removeComponentFromDish: (state, action: PayloadAction<{ dishId: number; component: number }>) => {
            const { dishId, component } = action.payload;
            const dish = state.dishes.find(dish => dish.dishId === dishId);
            if (dish) {
                dish.components = dish.components.filter(comp => comp !== component);
            }
        }

    },
});

export const selectAllDishes = (state: { dishes: DishesState }) => state.dishes.dishes;
export const selectDishById = (state: { dishes: DishesState }, dishId: number) => state.dishes.dishes.find(dish => dish.dishId === dishId);
export const selectDishesByStation = (stationId: number) => 
  createSelector(
    (state: { dishes: DishesState }) => state.dishes.dishes,
    (dishes) => dishes.filter(dish => dish.stations.includes(stationId))
);
export const selectDishesByComponent = (componentId: number) =>
    createSelector(
        (state: { dishes: DishesState }) => state.dishes.dishes,
        (dishes) => dishes.filter(dish => dish.components.includes(componentId))
);


export const createDish = () => {
    const dishId = Math.floor(Math.random() * 100000);
    return {
        dishId,
        name: '',
        stations: [],
        components: [],
    };
};

//export actions
export const { addDish, removeDish, updateDishName, addStationToDish, removeStationFromDish, addComponentToDish, removeComponentFromDish } = dishesSlice.actions;

export default dishesSlice.reducer;
