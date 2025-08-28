import { createSlice , nanoid } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    filter: "all"
  },
  reducers: {
    addTask: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(description) {
        return {
          payload: {
            id: nanoid(),
            description,
            isDone: false
          }
        };
      }
    },
    toggleTask: {
      reducer(state, action) {
        const task = state.items.find((item) => item.id === action.payload);
        if (task) {
          task.isDone = !task.isDone;
        }
      },
      prepare(id) {
        return {
          payload: id
        };
      }
    },
    editTask: {
      reducer(state, action) {
        const task = state.items.find((item) => item.id === action.payload.id);
        if (task) {
          task.description = action.payload.description;
        }
      },
      prepare(id, description) {
        return {
          payload: {
            id,
            description
          }
        };
      }
    },
    setFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
      prepare(filter) {
        return {
          payload: filter
        };
      }
    },
    deleteTask: {
      reducer(state, action) {
        const index = state.items.findIndex((item) => item.id === action.payload);
        if (index !== -1) {
          state.items.splice(index, 1);
        }
      },
      prepare(id) {
        return {
          payload: id
        };
      }
    }
  }
});

export const { addTask, toggleTask, editTask, setFilter, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
