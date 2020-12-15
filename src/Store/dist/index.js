"use strict";
exports.__esModule = true;
exports.reducer = void 0;
var redux_1 = require("redux");
var reducer_1 = require("./BreweryStore/reducer");
exports.reducer = redux_1.combineReducers({
    root: reducer_1["default"]
});
