import { createSlice } from "@reduxjs/toolkit";

const authState = {
  signedIn: false,
};

const auth = createSlice({
  name: "AUTH_DETAILS",
  initialState: authState,
  reducers: {
    signedIn(state) {
      state.signedIn = !state.signedIn;
    },
  },
});

export const authActions = auth.actions;
export const authReducer = auth.reducer;
