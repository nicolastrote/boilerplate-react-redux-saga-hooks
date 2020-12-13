import { IBrewery } from '../../Types/brewery';

import { BreweryState } from './types';
import { GetBreweryListAction, GET_BREWERY_LIST } from './action-types';

const initState: BreweryState = {
  breweryList: [],
};

const BreweryListReducer = (state: BreweryState = initState, action: GetBreweryListAction): BreweryState => {
  switch (action.type) {
    case GET_BREWERY_LIST: {
      // TODO replace breweryListFetched by the fetch value done by saga middleware call
      const breweryListFetched: IBrewery[] = [];

      return {
        breweryList: breweryListFetched,
      };
    }

    default:
      return state;
  }
};

export default BreweryListReducer;
