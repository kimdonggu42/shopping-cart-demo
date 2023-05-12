import { configureStore } from '@reduxjs/toolkit';
import uiSlice from '../slice/uiSlice';
import cartSlice from '../slice/cartSlice';

const store = configureStore({
  reducer: {
    uiReducer: uiSlice.reducer,
    cartReducer: cartSlice.reducer
  }
});

export default store;