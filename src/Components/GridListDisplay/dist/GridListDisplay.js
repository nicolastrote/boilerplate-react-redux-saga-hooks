"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CircularProgress_1 = require("@material-ui/core/CircularProgress");
var FormControl_1 = require("@material-ui/core/FormControl");
var Grid_1 = require("@material-ui/core/Grid");
var Input_1 = require("@material-ui/core/Input");
var Select_1 = require("@material-ui/core/Select");
var Typography_1 = require("@material-ui/core/Typography");
var lab_1 = require("@material-ui/lab");
var isEmpty_1 = require("lodash/isEmpty");
var core_1 = require("@material-ui/core");
var services_1 = require("../../Services/services");
var constants_1 = require("../../Utils/constants");
var CardDisplay_1 = require("../Title/Title");
require("./GridListDisplay.scss");
var GridListDisplay = function () {
    var _a = react_1.useState(null), breweryList = _a[0], setBreweryList = _a[1];
    var _b = react_1.useState(''), searchInput = _b[0], setSearchInput = _b[1];
    var _c = react_1.useState(''), searchSelector = _c[0], setSearchSelector = _c[1];
    var _d = react_1.useState(null), breweryListFiltered = _d[0], setBreweryListFiltered = _d[1];
    react_1.useEffect(function () {
        services_1.fetchAPI(constants_1.API_URL).then(function (response) { return setBreweryList(response); });
    }, []);
    react_1.useEffect(function () {
        setBreweryListFiltered(breweryList);
    }, [breweryList]);
    react_1.useEffect(function () {
        if (!isEmpty_1["default"](breweryList) && breweryList !== null) {
            var breweryListFilter = breweryList;
            if (searchInput !== '') {
                breweryListFilter = breweryListFilter.filter(function (brewery) {
                    return brewery.name.includes(searchInput);
                });
            }
            if (searchSelector !== '') {
                breweryListFilter = breweryListFilter.filter(function (brewery) { return brewery.city === searchSelector; });
            }
            setBreweryListFiltered(breweryListFilter);
        }
    }, [searchInput, searchSelector]);
    if (breweryListFiltered === null) {
        return (react_1["default"].createElement("div", { className: "circular-progress" },
            react_1["default"].createElement("div", null, "Application is fetching breweries from openbrewerydb.org"),
            react_1["default"].createElement(CircularProgress_1["default"], null)));
    }
    var handleChangeSearchInput = function (e) {
        e.preventDefault();
        var inputValue = e.target.value.replace(constants_1.ONLY_ALPHANUMERIC_REGEX, '');
        setSearchInput(inputValue);
    };
    var handleChangeSelector = function (event) {
        event.preventDefault();
        setSearchSelector(event.target.value);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "search-area" },
            react_1["default"].createElement("div", { className: "search-input-area" },
                react_1["default"].createElement(Typography_1["default"], { variant: "h5", gutterBottom: true }, "Search:"),
                react_1["default"].createElement(Input_1["default"], { id: "organism", name: "search-title", type: "text", placeholder: "search brewery by name", value: searchInput, className: "search-input", onChange: handleChangeSearchInput })),
            react_1["default"].createElement("div", { className: "search-selector-area" },
                react_1["default"].createElement(Typography_1["default"], { variant: "h5", gutterBottom: true }, "City:"),
                react_1["default"].createElement(FormControl_1["default"], { className: "search-selector" },
                    react_1["default"].createElement(Select_1["default"], { value: searchSelector, onChange: handleChangeSelector, id: "search-by-location" },
                        react_1["default"].createElement(core_1.MenuItem, { value: "" },
                            react_1["default"].createElement("em", null, "All")),
                        constants_1.LOCATIONS.map(function (location, index) { return (react_1["default"].createElement(core_1.MenuItem, { value: location, key: index }, location)); }))))),
        breweryListFiltered && (react_1["default"].createElement("div", { className: "grid-list-display" },
            react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 5, style: { padding: 24 } }, breweryListFiltered.map(function (brewery, index) { return (react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12, sm: 6, lg: 4, xl: 3, key: index.toString() },
                react_1["default"].createElement(CardDisplay_1["default"], { brewery: brewery }))); })))),
        breweryListFiltered && breweryListFiltered.length === 0 && (react_1["default"].createElement(lab_1.Alert, { severity: "warning" }, "Sorry there is no answer for your search...")),
        breweryList && breweryList.length === 0 && (react_1["default"].createElement(lab_1.Alert, { severity: "warning" }, "Sorry the list is empty..."))));
};
exports["default"] = GridListDisplay;
