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
var SimpleButton = function (_a) {
    var text = _a.text, button_color = _a.button_color, text_color = _a.text_color, extraCssClass = _a.extraCssClass;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "w-full inset-64" }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: "".concat(button_color, " ").concat(text_color, " px-4 py-2 rounded-3xl p4 text-center font-xl ").concat(extraCssClass) }, { children: text })) })));
};
exports.default = SimpleButton;
