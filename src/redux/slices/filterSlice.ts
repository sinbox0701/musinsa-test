import { createSlice } from '@reduxjs/toolkit';
import { FilterState } from './types';

const initialState: FilterState = {
  isSearch: false,
  isSales: false,
  isExclusive: false,
  isSoldout: false,
  keywords: [],
  result: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    activateSearch: (state) => {
      state.isSearch = true;
    },
    deactivateSearch: (state) => {
      state.isSearch = false;
    },
    activateSales: (state) => {
      state.isSales = true;
    },
    deactivateSales: (state) => {
      state.isSales = false;
    },
    activateExclusive: (state) => {
      state.isExclusive = true;
    },
    deactivateExclusive: (state) => {
      state.isExclusive = false;
    },
    activateSoldout: (state) => {
      state.isSoldout = true;
    },
    deactivateSoldout: (state) => {
      state.isSoldout = false;
    },
    resetFilter: (state) => {
      state.isSearch = false;
      state.isExclusive = false;
      state.isSales = false;
      state.isSoldout = false;
      state.result = '';
    },
    resetResult: (state) => {
      state.result = '';
    },
    recordKeywords: (state, action: { payload: { keywords: string[] } }) => {
      state.keywords = action.payload.keywords;
    },
    makeResult: (state, action: { payload: { keyword: string } }) => {
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
  recordKeywords,
  makeResult,
} = filtersSlice.actions;

export default filtersSlice.reducer;
