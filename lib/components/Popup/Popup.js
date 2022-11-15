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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_icons_1 = require("@patternfly/react-icons");
var Popup = function (_a) {
    var position = _a.position, variant = _a.variant, title = _a.title, closeable = _a.closeable;
    var _b = (0, react_1.useState)(true), alertVisible = _b[0], setAlertVisible = _b[1];
    var handleClose = function () { return setAlertVisible(false); };
    if (closeable)
        setTimeout(handleClose, 7000);
    return (
    // onClick event handler on the main div makes it possible to close the notification if a user clicks anywhere on the screen
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    (0, jsx_runtime_1.jsx)("div", __assign({ className: alertVisible ? 'modal_wrapper' : '', onClick: function () { return handleClose(); } }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "modal_container ".concat(position) }, { children: alertVisible && ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "modal" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "modal_bar ".concat(variant) }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "modal_bar_content" }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: "modal_close_button", type: "button", onClick: function () { return handleClose(); } }, { children: (0, jsx_runtime_1.jsx)(react_icons_1.TimesIcon, { className: "modal_close_icon" }) })) })) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "modal_content ".concat(variant, "_content") }, { children: [variant === 'danger' && (0, jsx_runtime_1.jsx)(react_icons_1.ExclamationCircleIcon, { className: "modal_status_icon ".concat(variant, "_content") }), variant === 'warning' && (0, jsx_runtime_1.jsx)(react_icons_1.ExclamationTriangleIcon, { className: "modal_status_icon ".concat(variant, "_content") }), variant === 'success' && (0, jsx_runtime_1.jsx)(react_icons_1.CheckCircleIcon, { className: "modal_status_icon ".concat(variant, "_content") }), (0, jsx_runtime_1.jsx)("p", __assign({ className: "modal_message" }, { children: title }))] }))] }))) })) })));
};
exports.default = Popup;
