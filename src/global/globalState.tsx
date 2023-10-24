import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const globalState = createSlice({
  name: "state",
  initialState,
  reducers: {
    toggle: (state: any) => {
      state.toggle = true;
    },
    // onChangeToggled: (state: any) => {
    //   state.toggle = false;
    // },
    
    changeToggleTrue: (state: any) => {
      state.toggle = true
  },
  changeToggleFalse: (state: any) => {
      state.toggle = false
  }
  },
});

export const { toggle, changeToggleTrue, changeToggleFalse } = globalState.actions;

export default globalState.reducer;
