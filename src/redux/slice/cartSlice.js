import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((value) => value.id === newItem.id);
      state.totalCount++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          count: 1,
          totalPrice: newItem.price
        });
      } else {
        existingItem.count++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const removeItemId = action.payload;
      const existingItem = state.items.find((value) => value.id === removeItemId);
      state.totalCount--;
      if (existingItem.count === 1) {
        state.items = state.items.filter((value) => value.id !== removeItemId);
      } else {
        existingItem.count--;
        existingItem.totalPrice -= existingItem.price;
      }
    }
  }
})

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice;