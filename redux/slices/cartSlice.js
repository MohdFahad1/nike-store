import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push({ ...action.payload, quantity: 1 });
    },

    incrementItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.find((cartItem) => cartItem.id === itemId);

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },

    decrementItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.find((cartItem) => cartItem.id === itemId);

      if (existingItem) {
        if(existingItem.quantity > 1){
            existingItem.quantity -= 1;
        }
      } else {
        return state.filter((item) => item.id !== existingItem);
      }
    },

    removeItem: (state, action) => {
    //   const itemIdToRemove = action.payload;
    //   return state.filter((item) => item.id !== itemIdToRemove);
    state.pop();
    },
  },
});

export const { addItem, removeItem, incrementItem, decrementItem } = cartSlice.actions;

export default cartSlice.reducer;
