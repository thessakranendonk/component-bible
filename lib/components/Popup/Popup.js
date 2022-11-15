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
var Popup = function (_a) {
    // const [alertVisible, setAlertVisible] = useState(true);
    var position = _a.position, variant = _a.variant, variant_color = _a.variant_color, title = _a.title, onClick = _a.onClick, closeable = _a.closeable, alertVisible = _a.alertVisible;
    // const handleClose = () => setAlertVisible(false);
    // if (closeable) setTimeout(handleClose, 7000);
    return (
    // onClick event handler on the main div makes it possible to close the notification if a user clicks anywhere on the screen
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    (0, jsx_runtime_1.jsx)("div", __assign({ className: alertVisible ? 'z-40 w-full h-full bg-black/20 absolute left-0 top-0' : '', onClick: onClick }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "fixed z-50 flex justify-between h-max border-r-8 shadow-md ".concat(position) }, { children: alertVisible && ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex flex-col w-48 h-auto backdrop:blur-sm" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "p-5 self-end border-radius ".concat(variant_color) }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "w-48 flex justify-end" }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: "bg-transparent border-none self-end", type: "button", onClick: onClick }, { children: (0, jsx_runtime_1.jsx)(react_icons_1.TimesIcon, { className: "w-24 h-24 text-white p-8" }) })) })) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex border-radius p-16 bg-white ".concat(variant, "_content") }, { children: [variant === 'danger' && (0, jsx_runtime_1.jsx)(react_icons_1.ExclamationCircleIcon, { className: "w-24 h-24 p-8 ".concat(variant_color) }), variant === 'warning' && (0, jsx_runtime_1.jsx)(react_icons_1.ExclamationTriangleIcon, { className: "w-24 h-24 p-8 ".concat(variant_color) }), variant === 'success' && (0, jsx_runtime_1.jsx)(react_icons_1.CheckCircleIcon, { className: "w-24 h-24 p-8 ".concat(variant_color) }), (0, jsx_runtime_1.jsx)("p", __assign({ className: "modal_message" }, { children: title }))] }))] }))) })) })));
};
exports.default = Popup;
