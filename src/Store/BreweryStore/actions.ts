import { IBrewery } from '../../Types/brewery';

import { GetBreweryListAction, GET_BREWERY_LIST } from './action-types';

function action(type: string, payload: IBrewery[]): GetBreweryListAction {
  return { type, payload };
}

export const getBreweryList = (): GetBreweryListAction => action(GET_BREWERY_LIST, []);
