import { put, takeLatest, all } from 'redux-saga/effects';

import { API_URL } from '../../Utils/constants';

import { GET_BREWERY_LIST, GET_BREWERY_LIST_RECEIVED } from './action-types';

function* fetchBreweryList() {
  const fetchedBreweryList = yield fetch(API_URL).then((response) => response.json());
  console.log('// // fetchedBreweryList', fetchedBreweryList);
  yield put({ type: GET_BREWERY_LIST_RECEIVED, payload: fetchedBreweryList });
}

function* actionWatcher() {
  yield takeLatest(GET_BREWERY_LIST, fetchBreweryList);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
