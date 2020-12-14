import { BreweryState } from './types';
import { GetBreweryListAction, GET_BREWERY_LIST, GET_BREWERY_LIST_RECEIVED } from './action-types';

const initState: BreweryState = {
  loading: false,
  breweryList: [],
};

const BreweryListReducer = (
  state: BreweryState = initState,
  action: GetBreweryListAction,
): BreweryState => {
  switch (action.type) {
    case GET_BREWERY_LIST: {
      console.log('// // GET_BREWERY_LIST');

      return { ...state, loading: true };
    }

    case GET_BREWERY_LIST_RECEIVED: {
      console.log('// // GET_BREWERY_LIST_RECEIVED', action.payload);

      return { ...state, breweryList: action.payload, loading: false };
    }

    default:
      return state;
  }
};

export default BreweryListReducer;
