import { combineReducers } from 'redux';

import BreweryListReducer from './BreweryStore/reducer';

export const Reducer = combineReducers({
  root: BreweryListReducer,
});

export type RootState = ReturnType<typeof Reducer>;
