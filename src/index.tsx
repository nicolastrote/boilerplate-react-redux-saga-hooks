import React from 'react';
import createSagaMiddleware from 'redux-saga';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

import App from './Containers/App/App';
import rootSaga from './Store/BreweryStore/saga';
import { reducer } from './Store';
import * as serviceWorker from './serviceWorker';
import { GetBreweryListAction } from './Store/BreweryStore/action-types';
import { RootState } from './Store/types';

import './index.scss';

const sagaMiddleware = createSagaMiddleware();

const store: Store<RootState, GetBreweryListAction> & { dispatch: unknown } = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
