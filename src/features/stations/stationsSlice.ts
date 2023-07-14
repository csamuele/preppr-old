import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { Station } from '../../types';
import { mockStations } from '../../mockData';



interface StationsState {
  stations: Station[];
}

const initialState: StationsState = {
  stations: mockStations,
};

const stationsSlice = createSlice({
  name: 'stations',
  initialState,
  reducers: {
    addStation: (state, action: PayloadAction<Station>) => {
      state.stations.push(action.payload);
    },
    removeStation: (state, action: PayloadAction<number>) => {
      state.stations = state.stations.filter(station => station.stationId !== action.payload);
    },
    updateStationName: (state, action: PayloadAction<{ stationId: number; name: string }>) => {
      const { stationId, name } = action.payload;
      const station = state.stations.find(station => station.stationId === stationId);
      if (station) {
        station.name = name;
      }
    },
    //make reducer for addDishToStation
    addDishToStation: (state, action: PayloadAction<{ stationId: number; dish: number }>) => {
        const { stationId, dish } = action.payload;
        const station = state.stations.find(station => station.stationId === stationId);
        if (station) {
            station.dishes.push(dish);
        }
        },
    //make reducer for removeDishFromStation
    removeDishFromStation: (state, action: PayloadAction<{ stationId: number; dish: number }>) => {
        const { stationId, dish } = action.payload;
        const station = state.stations.find(station => station.stationId === stationId);
        if (station) {
            station.dishes = station.dishes.filter(ds => ds !== dish);
        }
    },

  },
});

export const selectAllStations = (state: { stations: StationsState }) => state.stations.stations;

export const { addStation, removeStation, updateStationName } = stationsSlice.actions;

export default stationsSlice.reducer;
