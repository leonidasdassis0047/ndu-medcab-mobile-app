import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartItem, CartState} from './cartTypes';

const initialState: CartState = {
  error: null,
  items: [],
  selectedStore: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // add item to cart
    addItemToCart: (state, action: PayloadAction<Omit<CartItem, 'count'>>) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id,
      );
      if (!existingItem) {
        if (state.selectedStore === null) {
          state.items.push({...action.payload, count: 1});
          state.selectedStore = action.payload.store;
        } else if (
          state.selectedStore !== null &&
          state.selectedStore === action.payload.store
        ) {
          state.items.push({...action.payload, count: 1});
        } else {
          state.error = 'Please from single store for this order';
        }
      } else {
        existingItem.count++;
      }
    },

    // increment item count
    incrementItemCount: (state, action: PayloadAction<string>) => {
      const cartItem = state.items.find(item => item.id === action.payload);
      if (!cartItem) {
        return;
      }
      cartItem.count++;
    },

    // decrement item count
    decrementItemCount: (state, action: PayloadAction<string>) => {
      const cartItem = state.items.find(item => item.id === action.payload);
      if (!cartItem) {
        return;
      } else {
        if (cartItem.count === 0) {
          cartItem.count = 0;
        } else {
          cartItem.count--;
        }
      }
    },

    // remove item
    removeItem: (state, action: PayloadAction<string>) => {
      const removeItem = state.items.filter(item => item.id !== action.payload);
      state.items = removeItem;
    },

    // clear cart
    clearCart: state => {
      state.items = [];
    },
  },
});

export const {
  addItemToCart,
  clearCart,
  decrementItemCount,
  incrementItemCount,
  removeItem,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
