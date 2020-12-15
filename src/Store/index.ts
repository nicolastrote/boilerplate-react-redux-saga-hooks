import { combineReducers } from 'redux';

import BreweryListReducer from './BreweryStore/reducer';

export const reducer = combineReducers({
  root: BreweryListReducer,
});
