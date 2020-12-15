"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var action_types_1 = require("./action-types");
var initState = {
    loading: false,
    breweryList: []
};
var BreweryListReducer = function (state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case action_types_1.GET_BREWERY_LIST: {
            return __assign(__assign({}, state), { loading: true });
        }
        case action_types_1.GET_BREWERY_LIST_RECEIVED: {
            return __assign(__assign({}, state), { breweryList: action.payload, loading: false });
        }
        default:
            return state;
    }
};
exports["default"] = BreweryListReducer;
