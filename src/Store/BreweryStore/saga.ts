import { takeLatest } from 'redux-saga/effects';

import { GET_BREWERY_LIST } from './action-types';
import fetchBreweryListWorker from './workers';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* actionWatcher() {
  yield takeLatest(GET_BREWERY_LIST, fetchBreweryListWorker);
}
