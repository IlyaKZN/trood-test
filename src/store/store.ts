import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import viewReducer from './viewSlice';

const store = configureStore({
  reducer: {
    viewReducer
  },
  middleware: [thunk],
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
