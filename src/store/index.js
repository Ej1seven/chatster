import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialLoadingState = { showLoadingIcon: false };

const loadingSlice = createSlice({
  name: "loading",
  initialState: initialLoadingState,
  reducers: {
    showLoadingIcon(state) {
      state.showLoadingIcon = !state.showLoadingIcon;
    },
  },
});

const initialShowState = { showModal: false, passwordIcon: false };

const showSlice = createSlice({
  name: "show",
  initialState: initialShowState,
  reducers: {
    showModal(state) {
      state.showModal = !state.showModal;
    },
    passwordIcon(state) {
      state.passwordIcon = !state.passwordIcon;
    },
  },
});

const initialLoginState = {
  email: "",
  password: "",
  displayName: "",
  firstName: "",
  lastName: "",
};

const formInputSlice = createSlice({
  name: "form",
  initialState: initialLoginState,
  reducers: {
    email(state, action) {
      state.email = action.payload;
    },
    password(state, action) {
      state.password = action.payload;
    },
    displayName(state, action) {
      state.displayName = action.payload;
    },
    firstName(state, action) {
      state.firstName = action.payload;
    },
    lastName(state, action) {
      state.lastName = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    show: showSlice.reducer,
    form: formInputSlice.reducer,
    load: loadingSlice.reducer,
  },
});

export const showActions = showSlice.actions;
export const formActions = formInputSlice.actions;
export const loadingActions = loadingSlice.actions;

export default store;
