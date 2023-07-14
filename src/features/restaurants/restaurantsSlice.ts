//create slice for restaurants where each restaurant has a restaurantId number, a name, and a list of stations.

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Restaurant } from '../../types';
import { mockRestaurants } from '../../mockData';

interface RestaurantsState {
    restaurants: Restaurant[];
}

const initialState: RestaurantsState = {
    restaurants: mockRestaurants,
};

const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        addRestaurant: (state, action: PayloadAction<Restaurant>) => {
            state.restaurants.push(action.payload);
        },
        //make reducer for removeRestaurant
        removeRestaurant: (state, action: PayloadAction<number>) => {
            state.restaurants = state.restaurants.filter(restaurant => restaurant.restaurantId !== action.payload);
        },
        //make reducer for updateRestaurantName
        updateRestaurantName: (state, action: PayloadAction<{ restaurantId: number; name: string }>) => {
            const { restaurantId, name } = action.payload;
            const restaurant = state.restaurants.find(restaurant => restaurant.restaurantId === restaurantId);
            if (restaurant) {
                restaurant.name = name;
            }
        },
        //make reducer for addStationToRestaurant
        addStationToRestaurant: (state, action: PayloadAction<{ restaurantId: number; station: number }>) => {
            const { restaurantId, station } = action.payload;
            const restaurant = state.restaurants.find(restaurant => restaurant.restaurantId === restaurantId);
            if (restaurant) {
                restaurant.stations.push(station);
            }
        },
        //make reducer for removeStationFromRestaurant
        removeStationFromRestaurant: (state, action: PayloadAction<{ restaurantId: number; station: number }>) => {
            const { restaurantId, station } = action.payload;
            const restaurant = state.restaurants.find(restaurant => restaurant.restaurantId === restaurantId);
            if (restaurant) {
                restaurant.stations = restaurant.stations.filter(st => st !== station);
            }
        }

    },
});

export const {
    addRestaurant,
    removeRestaurant,
    updateRestaurantName,
    addStationToRestaurant,
    removeStationFromRestaurant
} = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
