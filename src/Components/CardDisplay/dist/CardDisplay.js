"use strict";
exports.__esModule = true;
var Card_1 = require("@material-ui/core/Card");
var CardContent_1 = require("@material-ui/core/CardContent");
var Typography_1 = require("@material-ui/core/Typography");
var react_1 = require("react");
var isEmpty_1 = require("lodash/isEmpty");
require("./Title.scss");
var CardDisplay = function (props) {
    var brewery = props.brewery;
    var onClickCard = function (e, absoluteUrl) {
        e.stopPropagation();
        window.open(absoluteUrl, '_blank');
    };
    return (react_1["default"].createElement(Card_1["default"], { className: "card", onClick: function (e) {
            return onClickCard(e, brewery.website_url);
        } },
        react_1["default"].createElement(CardContent_1["default"], null,
            react_1["default"].createElement(Typography_1["default"], { className: "over-line", color: "textSecondary", gutterBottom: true }, isEmpty_1["default"](brewery.city) ? 'N.A.' : brewery.city),
            react_1["default"].createElement(Typography_1["default"], { className: "title truncate-overflow", variant: "body1", component: "h4" }, isEmpty_1["default"](brewery.name) ? 'N.A.' : brewery.name))));
};
exports["default"] = CardDisplay;
