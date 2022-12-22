import { createSlice } from '@reduxjs/toolkit';
import { FilterState } from './types';

const initialState: FilterState = {
  search: false,
  sales: false,
  exclusive: false,
  soldout: false,
  keyword: '',
  result: '',
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
    search: (state, action: { payload: { keyword: string } }) => {
      state.keyword = action.payload.keyword;
    },
    makeWord: (state, action: { payload: { keyword: string } }) => {
      state.result = action.payload.keyword;
    },
  },
});

export const { changeSearch, changeSales, changeExclusive, changeSoldout, search, makeWord } =
  filtersSlice.actions;

export default filtersSlice.reducer;
