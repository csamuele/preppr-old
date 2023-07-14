//Make slice for tasks
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../types';
import { createSelector } from '@reduxjs/toolkit';
import { mockTasks } from '../../mockData';
interface TasksState {
    tasks: Task[];
}

const initialState: TasksState = {
    tasks: mockTasks,
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        }

    },
});

export const selectAllTasks = (state: { tasks: TasksState }) => state.tasks.tasks;
export const selectTasksByComponent = (componentId: number) => createSelector(
    selectAllTasks,
    tasks => tasks.filter(task => task.component === componentId)
);

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;

