import { createSlice } from "@reduxjs/toolkit";

const authState = {
  signedIn: false,
  signUp: false,
};

const auth = createSlice({
  name: "AUTH_DETAILS",
  initialState: authState,
  reducers: {
    signedIn(state) {
      state.signedIn = !state.signedIn;
    },

    signUp(state) {
      state.signUp = !state.signUp;
    },
  },
});

export const authActions = auth.actions;
export const authReducer = auth.reducer;
