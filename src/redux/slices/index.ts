import { combineReducers } from 'redux';
import { filtersSlice } from './filterSlice';

const rootReducer = combineReducers({
  [filtersSlice.name]: filtersSlice.reducer,
});

export default rootReducer;
