"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Login = void 0;
var client_1 = require("next-auth/client");
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
exports.Login = function () {
    var _a;
    var _b = client_1.useSession(), session = _b[0], loading = _b[1];
    return (React.createElement(React.Fragment, null,
        !session && (React.createElement(React.Fragment, null, loading ? (React.createElement(React.Fragment, null, "Loading ...")) : (React.createElement(React.Fragment, null,
            "Not signed in ",
            React.createElement("br", null),
            React.createElement("button", { onClick: function () { return client_1.signIn(); } }, "Sign in"))))),
        session && (React.createElement(React.Fragment, null,
            React.createElement("img", { src: (_a = session.user.image) !== null && _a !== void 0 ? _a : '', width: '50px' }),
            " ",
            session.user.name,
            session.accessToken,
            " ",
            React.createElement("br", null),
            React.createElement("button", { onClick: function () { return client_1.signOut(); } }, "Sign out")))));
};
var templateObject_1;
