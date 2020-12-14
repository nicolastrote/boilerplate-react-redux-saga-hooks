import { combineReducers } from 'redux';

import BreweryListReducer from './BreweryStore/reducer';

export const reducer = combineReducers({
  root: BreweryListReducer,
});

export type RootState = ReturnType<typeof reducer>;
