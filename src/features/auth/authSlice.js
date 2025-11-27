// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API base URL
const API_URL = 'http://localhost:8082/api/v1/auth';

// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { username, password });
      
      // Log the response to see the actual structure
      console.log('Login response:', response.data);
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Server error');
    }
  }
);

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        
        // Handle different possible response structures
        const responseData = action.payload;
        
        if (typeof responseData === 'string') {
          // If backend returns token as plain string
          state.token = responseData;
          localStorage.setItem('token', responseData);
        } else if (responseData.token) {
          // If backend returns { token: "jwt-token" }
          state.token = responseData.token;
          localStorage.setItem('token', responseData.token);
        } else if (responseData.accessToken) {
          // If backend returns { accessToken: "jwt-token" }
          state.token = responseData.accessToken;
          localStorage.setItem('token', responseData.accessToken);
        } else if (responseData.data && responseData.data.token) {
          // If backend returns { data: { token: "jwt-token" } }
          state.token = responseData.data.token;
          localStorage.setItem('token', responseData.data.token);
        } else {
          // If structure is unexpected
          state.error = 'Unexpected response format from server';
          console.error('Unexpected login response:', responseData);
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Login failed';
        state.token = null;
        localStorage.removeItem('token');
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;