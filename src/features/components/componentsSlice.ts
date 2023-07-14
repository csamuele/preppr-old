//create componentsSlice
import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { Component } from '../../types';
import { mockComponents } from '../../mockData';

interface ComponentsState {
    components: Component[];
}

const initialState: ComponentsState = {
    components: mockComponents,
};

const componentsSlice = createSlice({
    name: 'components',
    initialState,
    reducers: {
        addComponent: (state, action: PayloadAction<Component>) => {
            state.components.push(action.payload);
        }
    }
});

export const { addComponent } = componentsSlice.actions;

export const selectAllComponents = (state: { components: ComponentsState }) => state.components.components;
export const selectComponentsByDish = (dishId: number) => createSelector(
    selectAllComponents,
    (components) => components.filter(component => component.dishes.includes(dishId))
);
export default componentsSlice.reducer;
