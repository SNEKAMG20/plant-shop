import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
  totalCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find(item => item.id === product.id);
      if (!existing) {
        state.items.push({ ...product, quantity: 1 });
        state.totalItems += 1;
        state.totalCost += product.price;
      }
    },
    increment(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      item.quantity++;
      state.totalItems++;
      state.totalCost += item.price;
    },
    decrement(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item.quantity > 1) {
        item.quantity--;
        state.totalItems--;
        state.totalCost -= item.price;
      }
    },
    removeItem(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      state.totalItems -= item.quantity;
      state.totalCost -= item.price * item.quantity;
      state.items = state.items.filter(i => i.id !== action.payload);
    },
  },
});

export const { addToCart, increment, decrement, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
