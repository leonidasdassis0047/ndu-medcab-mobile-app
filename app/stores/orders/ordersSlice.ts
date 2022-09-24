import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {AppStoreRootState} from '..';

const RESOURCE = 'https://medcab-server-v2.herokuapp.com/api/orders/';

interface IOrder {
  store: string;
  order_items: Array<{id: string; quantity: number}>;
}

type FetchOrdersError = {
  message: string;
};

type OrdersState = {
  error: string | null;
  loading: boolean;
  orders: Array<IOrder>;
};

const initialState: OrdersState = {
  error: null,
  loading: false,
  orders: [],
};

/**
 * @desc    fetching orders for user
 * @param   userId:{string}
 */
export const fetchOrders = createAsyncThunk<
  Array<IOrder>,
  string,
  {rejectValue: FetchOrdersError}
>('orders/fetch', async (userId, thunkApi) => {
  const response = await axios.get<Array<IOrder>>(RESOURCE, {
    params: {user: userId},
  });

  if (response.status !== 200) {
    thunkApi.rejectWithValue({
      message: 'Error loading orders',
    });
  }
  return response.data;
});

/**
 * @desc    placing a new order.
 * @param   order {IOrder}
 */
export const createOrder = createAsyncThunk<void, IOrder>(
  'orders/create',
  async (order: IOrder) => {
    const response = await axios.post<{
      error: boolean;
      message?: string;
      status: number;
      data: any;
    }>(
      RESOURCE,
      {items: order.order_items},
      {
        params: {store: order.store},
      },
    );

    console.log(response.data);
  },
);

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // FETCHING ORDERS FOR THIS USER
    // pending
    builder.addCase(fetchOrders.pending, state => {
      state.loading = true;
      state.error = null;
    });

    // success
    builder.addCase(fetchOrders.fulfilled, (state, {payload}) => {
      state.orders = payload;
      state.loading = false;
    });

    // error
    builder.addCase(fetchOrders.rejected, (state, {payload}) => {
      if (payload) {
        state.error = payload.message;
      }
      state.loading = false;
    });
    // ************************************************************

    // PLACING AN ORDER
  },
});

export const {} = ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;
export const ordersLoadingState = (state: AppStoreRootState) =>
  state.orders.loading;
