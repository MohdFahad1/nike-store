import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    increaseItem: (state, action) => {
      const itemIdToIncrease = action.payload;
      const itemToIncrease = state.find((item) => item.id === itemIdToIncrease);

      if(itemToIncrease){
        itemToIncrease.quantity += 1;
      }
    },

    decreaseItem: (state, action) => {
      const itemIdToDecrease = action.payload;
      const itemToDecrease = state.find((item) => item.id === itemIdToDecrease);

      if(itemIdToDecrease) {
        itemToDecrease.quantity = Math.max(itemToDecrease.quantity - 1, 1);
      }
    },

    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      return state.filter((item) => item.id !== itemIdToRemove);
    },

    removeAllItems: (state, action) => {
      return [];
    }


  },
});

export const { addItem, removeItem, removeAllItems, increaseItem, decreaseItem } = cartSlice.actions;

export default cartSlice.reducer;