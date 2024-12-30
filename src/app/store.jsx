import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from '../redux/calculatorSlice'

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});

export default store;
