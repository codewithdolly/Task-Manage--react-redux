import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, name: 'Design Landing Page', dueDate: '2024-09-30', status: 'To Do', description: 'Landing page design for the website.' },
    { id: 2, name: 'Develop Marketing Plan', dueDate: '2024-10-05', status: 'In Progress', description: 'Create a comprehensive marketing plan.' },
    { id: 3, name: 'Set Up CRM System', dueDate: '2024-10-15', status: 'Done', description: 'Configure the CRM for client management.' },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.status = status;
      }
    },
    deleteTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload);
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    }
  },
});

export const { addTask, updateTaskStatus, deleteTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
