import { createSlice, nanoid } from "@reduxjs/toolkit";



export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: nanoid(),
        title: action.payload.title,
        author: action.payload.author,
        categories: action.payload.categories,
        detail: action.payload.detail
      })
    },

    removeTask: (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload)
      }

    }
  });

  export const { addTask, removeTask } = taskSlice.actions;

  export default taskSlice.reducer;