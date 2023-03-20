import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showNotification: null,
};

const UI = createSlice({
  name: "UI_SLICE",
  initialState,
  reducers: {
    showNotification(state, action) {
      if (action.payload)
        state.showNotification = {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message,
        };
      else {
        state.showNotification = null;
      }
    },
  },
});

export const UIActions = UI.actions;
export const UIReducer = UI.reducer;
