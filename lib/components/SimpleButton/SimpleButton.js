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
    var text = _a.text;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "w-full inset-64" }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: "bg-black text-purple-700 rounded-lg p4 text-center font-xl" }, { children: text })) })));
};
exports.default = SimpleButton;
