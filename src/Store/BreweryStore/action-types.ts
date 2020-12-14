import { IBrewery } from '../../Types/brewery';

export const GET_BREWERY_LIST = 'GET_BREWERY_LIST';
export const GET_BREWERY_LIST_RECEIVED = 'GET_BREWERY_LIST_RECEIVED';

export interface GetBreweryListAction {
  type: string;
  payload: IBrewery[];
}
