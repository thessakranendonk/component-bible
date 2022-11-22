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
var react_icons_1 = require("@patternfly/react-icons");
var AlertPopup = function (_a) {
    var position = _a.position, variant = _a.variant, variant_color = _a.variant_color, icon_color = _a.icon_color, text_color = _a.text_color, title = _a.title, onClick = _a.onClick, closeable = _a.closeable, alertVisible = _a.alertVisible;
    return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    (0, jsx_runtime_1.jsx)("div", __assign({ className: alertVisible ? 'z-40 w-screen h-screen bg-black/20 absolute left-0 top-0' : '', onClick: onClick }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "fixed z-50 max-w-lg flex justify-between rounded-lg shadow-md ".concat(position) }, { children: alertVisible && ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex flex-col  h-auto backdrop:blur-sm" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "p-2 w-full self-end rounded-t-lg ".concat(variant_color) }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "flex justify-end" }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: "bg-transparent border-none self-end", type: "button", onClick: onClick }, { children: (0, jsx_runtime_1.jsx)(react_icons_1.TimesIcon, { className: "w-8 h-8 text-white p-1" }) })) })) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "grid grid-cols-8 rounded-b-lg py-6 px-8 bg-white" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "col-start-1 pt-1" }, { children: [variant === 'danger' && (0, jsx_runtime_1.jsx)(react_icons_1.ExclamationCircleIcon, { className: "w-6 h-6 ".concat(icon_color) }), variant === 'warning' && (0, jsx_runtime_1.jsx)(react_icons_1.ExclamationTriangleIcon, { className: "w-6 h-6 ".concat(icon_color) }), variant === 'success' && (0, jsx_runtime_1.jsx)(react_icons_1.CheckCircleIcon, { className: "w-6 h-6 ".concat(icon_color) })] })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "col-start-2 col-span-8 text-md leading-4 pl-4 pt-1 ".concat(text_color) }, { children: title }))] }))] }))) })) })));
};
exports.default = AlertPopup;
