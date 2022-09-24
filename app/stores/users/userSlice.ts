import axios from 'axios';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

interface Users {
  users: Array<{name: string}>;
  loading: boolean;
  error: string;
}

const initialState: Users = {
  users: [],
  loading: false,
  error: '',
};

const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
  axios.get<Array<{name: string; id: string}>>('').then(response => {
    return response.data.map(user => user.name);
  });
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // loading users
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true;
    });

    // success on getting users
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = 'false';
    });

    // error
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const usersActions = userSlice.actions;
export const usersReducers = userSlice.reducer;
