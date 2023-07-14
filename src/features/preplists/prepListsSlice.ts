//create prepListsSlice
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PrepList } from '../../types';
import { mockPrepLists } from '../../mockData';
import { createSelector } from '@reduxjs/toolkit';

interface PrepListsState {
    prepLists: PrepList[];
}

const initialState: PrepListsState = {
    prepLists: mockPrepLists,
};

const prepListsSlice = createSlice({
    name: 'prepLists',
    initialState,
    reducers: {
        addPrepList: (state, action: PayloadAction<PrepList>) => {
            state.prepLists.push(action.payload);
        }
    },
});

export const selectAllPrepLists = (state: { prepLists: PrepListsState }) => state.prepLists.prepLists;
export const selectPrepListById = (prepListId: number) => createSelector(
    selectAllPrepLists,
    (prepLists) => prepLists.find(prepList => prepList.prepListId === prepListId)
);

export const { addPrepList } = prepListsSlice.actions;

export default prepListsSlice.reducer;

