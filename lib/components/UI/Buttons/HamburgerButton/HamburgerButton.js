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
exports.HamburgerButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var HamburgerButton = function (_a) {
    var isOpen = _a.isOpen;
    var genericHamburgerLine = "h-0.5 w-8 my-1.5 rounded-full bg-black transition ease transform duration-300";
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex flex-col w-16 rounded justify-center items-center group -mr-6" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "".concat(genericHamburgerLine, " ").concat(isOpen ? 'rotate-45 translate-y-3.5 opacity-50 group-hover:opacity-100' : 'opacity-50 group-hover:opacity-100') }), (0, jsx_runtime_1.jsx)("div", { className: "".concat(genericHamburgerLine, " ").concat(isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100') }), (0, jsx_runtime_1.jsx)("div", { className: "".concat(genericHamburgerLine, " ").concat(isOpen
                    ? '-rotate-45 -translate-y-3.5 opacity-50 group-hover:opacity-100'
                    : 'opacity-50 group-hover:opacity-100') })] })));
};
exports.HamburgerButton = HamburgerButton;
