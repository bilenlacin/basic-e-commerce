import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}`);
    return res.data;
  }
);

export const fetchCategories = createAsyncThunk(
  'categories,getCategories',
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/categories`
    );
    return res.data;
  }
);

export const fetchProductDetails = createAsyncThunk(
  'detail/getDetail',
  async (id) => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/${id}`);
    return res.data;
  }
);
export const fetchSpecificCategory = createAsyncThunk(
  'category/getCategory',
  async (product) => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/category/${product}`
    );
    return res.data;
  }
);

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    categories: [],
    category: [],
    details: {},
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.details = {};
    },
    [fetchSpecificCategory.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSpecificCategory.fulfilled]: (state, action) => {
      state.category = action.payload;
      state.loading = false;
      state.details = {};
    },
    [fetchProductDetails.pending]: (state, action) => {
      state.details = {};
      state.loading = true;
    },
    [fetchProductDetails.fulfilled]: (state, action) => {
      state.details = action.payload;
      state.loading = false;
    },
  },
});

export default productSlice.reducer;
