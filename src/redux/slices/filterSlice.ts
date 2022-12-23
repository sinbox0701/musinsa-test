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
    activateSearch: (state) => {
      state.search = true;
    },
    deactivateSearch: (state) => {
      state.search = false;
    },
    activateSales: (state) => {
      state.sales = true;
    },
    deactivateSales: (state) => {
      state.sales = false;
    },
    activateExclusive: (state) => {
      state.exclusive = true;
    },
    deactivateExclusive: (state) => {
      state.exclusive = false;
    },
    activateSoldout: (state) => {
      state.soldout = true;
    },
    deactivateSoldout: (state) => {
      state.soldout = false;
    },
    resetFilter: (state) => {
      state.search = false;
      state.exclusive = false;
      state.sales = false;
      state.soldout = false;
      state.result = '';
    },
    resetResult: (state) => {
      state.result = '';
    },
    search: (state, action: { payload: { keyword: string } }) => {
      state.keyword = action.payload.keyword;
    },
    makeWord: (state, action: { payload: { keyword: string } }) => {
      state.result = action.payload.keyword;
    },
  },
});

export const {
  activateSearch,
  deactivateSearch,
  activateExclusive,
  deactivateExclusive,
  activateSales,
  deactivateSales,
  activateSoldout,
  deactivateSoldout,
  resetFilter,
  resetResult,
  search,
  makeWord,
} = filtersSlice.actions;

export default filtersSlice.reducer;
