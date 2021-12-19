"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Header = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var StyledFooter = styled_components_1["default"].header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #bbbbbb;\n"], ["\n  width: 100%;\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #bbbbbb;\n"])));
exports.Header = function () {
    return react_1["default"].createElement(StyledFooter, null, "Header");
};
var templateObject_1;
