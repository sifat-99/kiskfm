import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./counterSlider"


const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;