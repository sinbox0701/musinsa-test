import { createSlice } from '@reduxjs/toolkit';
import { FilterState } from './types';

const initialState: FilterState = {
  search: false,
  sales: false,
  exclusive: false,
  soldout: false,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeSearch: (state) => {
      state.search = !state.search;
    },
    changeSales: (state) => {
      state.sales = !state.sales;
    },
    changeExclusive: (state) => {
      state.exclusive = !state.exclusive;
    },
    changeSoldout: (state) => {
      state.soldout = !state.soldout;
    },
  },
});

export const { changeSearch, changeSales, changeExclusive, changeSoldout } = filtersSlice.actions;

export default filtersSlice.reducer;
