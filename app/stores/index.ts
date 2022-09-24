import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

import logger from 'redux-logger';

import {cartReducer} from './cart/cartSlice';
import {ordersReducer} from './orders/ordersSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: ordersReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export type AppStoreRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTypedSelector: TypedUseSelectorHook<AppStoreRootState> =
  useSelector;
