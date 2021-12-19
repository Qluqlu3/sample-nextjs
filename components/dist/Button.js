"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Button = void 0;
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 130px;\n  height: 30px;\n  font-size: 15px;\n  color: #008031;\n  border-radius: 30px;\n  border: solid 1px #008031;\n  transition: border-color color 0.2s ease-in-out;\n  cursor: pointer;\n  &:hover {\n    border: solid 1px #00b344;\n    color: #00b344;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 130px;\n  height: 30px;\n  font-size: 15px;\n  color: #008031;\n  border-radius: 30px;\n  border: solid 1px #008031;\n  transition: border-color color 0.2s ease-in-out;\n  cursor: pointer;\n  &:hover {\n    border: solid 1px #00b344;\n    color: #00b344;\n  }\n"])));
exports.Button = function (props) {
    var message = props.message;
    return React.createElement(Wrapper, null, message);
};
var templateObject_1;
