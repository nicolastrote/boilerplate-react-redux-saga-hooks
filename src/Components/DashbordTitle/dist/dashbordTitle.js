"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Typography_1 = require("@material-ui/core/Typography");
var homeIcon_1 = require("../HomeIcon/homeIcon");
require("./dashbordTitle.scss");
var DashbordTitle = function () {
    return (react_1["default"].createElement("div", { className: "dashbord-title" },
        react_1["default"].createElement(Typography_1["default"], { variant: "h1", gutterBottom: true },
            "Brewery React Demo ",
            react_1["default"].createElement(homeIcon_1["default"], null)),
        react_1["default"].createElement(Typography_1["default"], { variant: "subtitle1", gutterBottom: true }, "A web app to exercise on react, typescript, eslint, prettier, redux, hooks, saga ...")));
};
exports["default"] = DashbordTitle;
