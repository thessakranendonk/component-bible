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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PulseMenuButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var clsx_1 = __importDefault(require("clsx"));
var PulseMenuButton = function () {
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "block" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, clsx_1.default)('group inline-block w-12 h-12 bg-teal-600 cursor-pointer rounded-full', 'group-hover:transition', 'hover:cursor-pointer hover:animate-pulse') }, { children: [(0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)('mx-auto relative bg-red-400 w-8 h-1 rounded-md mt-3 mb-1.5', 'absolute group-hover:w-1.5 group-hover:animate-slide') }), (0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)('mx-auto relative bg-red-400 w-8 h-1 rounded-md mb-1.5', 'absolute group-hover:w-1.5 group-hover:animate-slide2') }), (0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)('mx-auto relative bg-red-400 w-8 h-1 rounded-md mb-1.5', 'absolute group-hover:w-1.5 group-hover:animate-slide') })] })) })));
};
exports.PulseMenuButton = PulseMenuButton;
