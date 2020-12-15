"use strict";
exports.__esModule = true;
var react_1 = require("react");
var redux_saga_1 = require("redux-saga");
var react_dom_1 = require("react-dom");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var redux_logger_1 = require("redux-logger");
var App_1 = require("./Containers/App/App");
var saga_1 = require("./Store/BreweryStore/saga");
var Store_1 = require("./Store");
var serviceWorker = require("./serviceWorker");
require("./index.scss");
var sagaMiddleware = redux_saga_1["default"]();
var store = redux_1.createStore(Store_1.reducer, redux_1.applyMiddleware(sagaMiddleware, redux_logger_1.logger));
sagaMiddleware.run(saga_1["default"]);
react_dom_1["default"].render(react_1["default"].createElement(react_redux_1.Provider, { store: store },
    react_1["default"].createElement(App_1["default"], null)), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
