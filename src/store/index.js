import { createStore } from "redux";

const showReducer = (state = { show: false, passwordIcon: false }, action) => {
  if (action.type === "toggleRegistrationPage") {
    return {
      show: !state.show,
    };
  }
  if (action.type === "togglePasswordIcon") {
    return {
      passwordIcon: !state.passwordIcon,
    };
  }
  return state;
};

const store = createStore(showReducer);

// import { createSlice, configureStore } from "@reduxjs/toolkit";

// const initialShowState = { show: false };

// const showSlice = createSlice({
//   name: "show",
//   initialShowState,
//   reducers: {
//     toggleRegistrationPage(state) {
//       state.show = !state.show;
//     },
//   },
// });

// const store = configureStore({
//   reducer: showSlice.reducer,
// });

// export const showActions = showSlice.actions;

export default store;
