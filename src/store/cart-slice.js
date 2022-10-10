import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [], totalQuantity: 0 },
  reducers: {
    addToCart(state, action) {
      state.totalQuantity += action.payload.quantity;

      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }

      // state.products.push(action.payload);
    },
    removeFromCart(state, action) {
      state.totalQuantity--;

      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct.quantity === 1) {
        state.products = state.products.filter(
          (product) => product.id !== existingProduct.id
        );
      } else {
        existingProduct.quantity--;
      }
    },
    addQuantity(state, action) {
      state.totalQuantity++;
      const certainProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      certainProduct.quantity++;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
