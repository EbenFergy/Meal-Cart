import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showNotification: null,
};

const UI = createSlice({
  name: "UI_SLICE",
  initialState,
  reducers: {
    showNotification(state, action) {
      state.showNotification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const UIActions = UI.actions;
export const UIReducer = UI.reducer;
