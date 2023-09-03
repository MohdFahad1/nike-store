import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push({ ...action.payload });
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

export const { addItem, removeItem, removeAllItems } = cartSlice.actions;

export default cartSlice.reducer;
