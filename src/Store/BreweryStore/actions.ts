import { GetBreweryListAction, GET_BREWERY_LIST } from './action-types';

export const getBreweryList = (): GetBreweryListAction => {
  console.log('// // ACTIONS');

  return {
    type: GET_BREWERY_LIST,
  };
};
