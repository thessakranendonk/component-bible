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
var jsx_runtime_1 = require("react/jsx-runtime");
var clsx_1 = __importDefault(require("clsx"));
var HeroInfoBar = function (_a) {
    var heroImageRowItemsClassName = _a.heroImageRowItemsClassName, heroImageBarItems = _a.heroImageBarItems;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "relative w-screen md:flex justify-between" }, { children: heroImageBarItems.map(function (item) { return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, clsx_1.default)('mx-auto w-full text-center py-4 md:py-6 lg:py-6 md:text-xl', heroImageRowItemsClassName) }, { children: item }), item)); }) })));
};
exports.default = HeroInfoBar;
