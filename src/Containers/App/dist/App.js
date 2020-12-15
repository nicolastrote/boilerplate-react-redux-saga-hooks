"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var core_1 = require("@material-ui/core");
var actions_1 = require("../../Store/BreweryStore/actions");
var GridListDisplay_1 = require("../../Components/GridListDisplay/GridListDisplay");
var Spinner_1 = require("../../Components/Spinner/Spinner");
var dashbordTitle_1 = require("../../Components/DashbordTitle/dashbordTitle");
require("./App.scss");
// eslint-disable-next-line no-undef
var App = function () {
    var dispatch = react_redux_1.useDispatch();
    var breweryList = react_redux_1.useSelector(function (state) { return state.root.breweryList; });
    var breweryListLoading = react_redux_1.useSelector(function (state) { return state.root.loading; });
    react_1.useEffect(function () {
        dispatch(actions_1.getBreweryList());
    }, []);
    return (react_1["default"].createElement("section", null,
        react_1["default"].createElement(dashbordTitle_1["default"], null),
        react_1["default"].createElement(core_1.Divider, null),
        breweryListLoading ? react_1["default"].createElement(Spinner_1["default"], null) : react_1["default"].createElement(GridListDisplay_1["default"], { breweryList: breweryList })));
};
exports["default"] = App;
