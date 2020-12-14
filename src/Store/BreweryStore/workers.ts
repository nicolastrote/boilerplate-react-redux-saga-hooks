import { put } from 'redux-saga/effects';

import { API_URL } from '../../Utils/constants';
import { IBrewery } from '../../Types/brewery';

import { GET_BREWERY_LIST_RECEIVED } from './action-types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* fetchBreweryListWorker() {
  const fetchedBreweryList: IBrewery[] = yield fetch(API_URL).then((response) => response.json());
  yield put({ type: GET_BREWERY_LIST_RECEIVED, payload: fetchedBreweryList });
}
