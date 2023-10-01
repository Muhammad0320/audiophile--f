import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    setCartData(state, action) {
      return action.payload;
    },

    addItem(state, action) {
      return { ...state, cart: [...state.cart, action.payload] };
    },

    deleteItem(state, action) {
      state.cart = state.cart?.filter((item) => item._id !== action.payload);
    },

    addItemQuantity(state, action) {
      const item = state.cart?.find((item) => item._id === action.payload);

      item.quantity++;

      item.totalPrice = item.quantity * item.product.price;
    },

    removeItemQuantity(state, action) {
      const item = state.cart.find((item) => item._id === action.payload);

      item.quantity--;

      item.totalPrice = item.quantity * item.product.price;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;

export const {
  addItem,
  addItemQuantity,
  removeItemQuantity,
  deleteItem,
  clearCart,
  setCartData,
} = cartSlice.actions;

export const getCart = (state) => state.cart?.cart;

export const getTotalCartQuantity = (state) =>
  state?.cart?.cart?.reduce((acc, curr) => acc + curr?.quantity, 0) ?? 0;

export const getTotalCartPrice = (state) =>
  state.cart?.cart?.reduce((acc, curr) => acc + curr?.totalPrice, 0);

export const getCurrentItemQuantityById = (_id) => (state) =>
  state.cart?.cart?.find((item) => item._id === _id)?.quantity ?? 0;
