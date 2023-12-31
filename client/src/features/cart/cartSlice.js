import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  changes: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    setCartData(state, action) {
      return { ...state, cart: action.payload };
    },

    addItem(state, action) {
      return {
        ...state,

        cart: [...(state.cart || []), action.payload],

        changes: [
          ...(state.changes || []),
          { type: "add", item: action.payload },
        ],
      };
    },

    deleteItem(state, action) {
      state.cart = state.cart?.filter(
        (item) => item.product._id !== action.payload
      );

      state.changes = [
        ...(state.changes || []),
        { type: "delete", itemId: action.payload },
      ];
    },

    addItemQuantity(state, action) {
      const item = state.cart.find(
        (item) => item.product._id === action.payload
      );

      item.quantity++;

      item.totalPrice = item.quantity * item.product.price;

      state.changes.push({ type: "update", item: { ...item } });
    },

    removeItemQuantity(state, action) {
      const item = state.cart.find(
        (item) => item.product._id === action.payload
      );

      item.quantity--;

      item.totalPrice = item.quantity * item.product.price;

      state.changes.push({ type: "update", item: { ...item } });

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },

    clearChanges(state) {
      state.changes = [];
    },

    clearCart(state) {
      state.cart = [];

      state.changes = [];
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
  clearChanges,
  setCartData,
} = cartSlice.actions;

export const getCart = (state) => state.cart?.cart;

export const getChanges = (state) => state.cart?.changes;

export const getTotalCartQuantity = (state) =>
  state.cart.cart?.reduce((acc, curr) => acc + curr?.quantity, 0) ?? 0;

export const getTotalCartPrice = (state) =>
  state.cart.cart?.reduce((acc, curr) => acc + curr?.totalPrice, 0);

export const getCurrentItemQuantityById = (id) => (state) =>
  state.cart.cart?.find((item) => item.product._id === id)?.quantity ?? 0;
