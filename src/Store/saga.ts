import { all, ForkEffect, AllEffect } from 'redux-saga/effects';

import actionWatcher from './BreweryStore/saga';

// eslint-disable-next-line prettier/prettier,max-len
export default function* rootSaga(): Generator<AllEffect<Generator<ForkEffect<never>, void, unknown>>> {
  yield all([actionWatcher()]);
}
