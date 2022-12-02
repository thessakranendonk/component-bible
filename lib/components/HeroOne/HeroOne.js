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
var HeroOne = function (_a) {
    var image = _a.image, alt = _a.alt, heroImageClassName = _a.heroImageClassName, location = _a.location, locationClassName = _a.locationClassName, companyName = _a.companyName, companyNameClassName = _a.companyNameClassName, infoText = _a.infoText, infoTextClassName = _a.infoTextClassName, contactButtonText = _a.contactButtonText, contactButtonClassName = _a.contactButtonClassName, buttonLink = _a.buttonLink;
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "relative" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: " inset-x-0 bottom-0 h-1/2 bg-gray-100" }), (0, jsx_runtime_1.jsx)("div", __assign({ className: "w-screen" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "relative shadow-xl sm:overflow-hidden" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "absolute inset-0" }, { children: [(0, jsx_runtime_1.jsx)("img", { className: (0, clsx_1.default)('h-full w-full object-cover opacity-50', heroImageClassName), src: image, alt: alt }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0" })] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "relative px-8 py-16 lg:py-28 lg:pt-20 lg:px-32" }, { children: [(0, jsx_runtime_1.jsxs)("h1", { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: (0, clsx_1.default)('block', locationClassName) }, { children: location })), (0, jsx_runtime_1.jsx)("span", __assign({ className: (0, clsx_1.default)('block', companyNameClassName) }, { children: companyName }))] }), (0, jsx_runtime_1.jsx)("p", __assign({ className: (0, clsx_1.default)('block', infoTextClassName) }, { children: infoText })), (0, jsx_runtime_1.jsx)("a", __assign({ href: buttonLink }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ type: "button", className: (0, clsx_1.default)('w-fit', contactButtonClassName) }, { children: contactButtonText })) }))] }))] })) }))] })) }));
};
exports.default = HeroOne;
