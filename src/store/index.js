import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { showModal: false, passwordIcon: false };

const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    showModal(state) {
      state.showModal = !state.showModal;
    },
    passwordIcon(state) {
      state.passwordIcon = !state.passwordIcon;
    },
  },
});

const store = configureStore({
  reducer: showSlice.reducer,
});

export const showActions = showSlice.actions;

export default store;
