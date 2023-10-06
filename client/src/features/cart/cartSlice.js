import { createSlice } from "@reduxjs/toolkit";

// https://dev.to/opensauced/open-source-101-a-beginners-guide-to-getting-started-37fb

// https://www.freecodecamp.org/news/how-to-contribute-to-open-source-projects-beginners-guide/

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
      // Chnaged it to this to notify redux that the state.cart chnages all the time !

      const itemIndex = state.cart.findIndex(
        (item) => item.product._id === action.payload
      );

      const item = state.cart[itemIndex];

      const updatedItem = {
        ...item,

        quantity: item.quantity + 1,

        totalPrice: item.price * item.quantity + 1,
      };

      state.cart = [
        ...state.cart.slice(0, itemIndex),

        updatedItem,

        ...state.cart.slice(itemIndex + 1),
      ];

      // const item = state.cart?.find(
      //   (item) => item.product._id === action.payload
      // );

      // item.quantity++;

      // item.totalPrice = item.quantity * item.product.price;

      state.changes.push({ type: "update", item: updatedItem });
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

    clearCart(state) {
      state.cart = [];

      state.changes = [];
    },

    clearChanges(state) {
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
  setCartData,
} = cartSlice.actions;

export const getCart = (state) => state.cart?.cart;

export const getChanges = (state) => state.cart?.changes;

export const getTotalCartQuantity = (state) =>
  state.cart?.cart?.reduce((acc, curr) => acc + curr?.quantity, 0) ?? 0;

export const getTotalCartPrice = (state) =>
  state.cart?.cart?.reduce((acc, curr) => acc + curr?.totalPrice, 0);

export const getCurrentItemQuantityById = (id) => (state) =>
  state.cart?.cart?.find((item) => item?.product?._id === id)?.quantity ?? 0;

export const getLastItemInCart = (state) =>
  state.cart?.cart.at(-1)?.quantity ?? 0;
