// src/features/products/filteredProductsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// src/features/products/filteredProductsSlice.js

export const fetchFilteredProducts = createAsyncThunk(
  "filteredProducts/fetchFilteredProducts",
  async (criteria, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams(criteria).toString();
      const res = await fetch(
        `http://localhost:8082/api/products/search?${params}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!res.ok) throw new Error("Failed to fetch products");
      return await res.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const filteredProductsSlice = createSlice({
  name: "filteredProducts",
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilteredProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchFilteredProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch products";
      });
  },
});

export default filteredProductsSlice.reducer;
