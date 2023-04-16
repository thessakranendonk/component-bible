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
var TabHeader = function (_a) {
    var navigationLinks = _a.navigationLinks, currentPath = _a.currentPath, tabDesignClassName = _a.tabDesignClassName, textColor = _a.textColor, textActiveColor = _a.textActiveColor, underlineFromColor = _a.underlineFromColor, underlineViaColor = _a.underlineViaColor, underlineToColor = _a.underlineToColor;
    return ((0, jsx_runtime_1.jsx)("nav", __assign({ className: "space-x-4 pointer-events-auto hidden md:flex" }, { children: (0, jsx_runtime_1.jsx)("ul", __assign({ className: (0, clsx_1.default)('flex rounded-full bg-zinc-50/90 px-3 text-base font-light text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur', tabDesignClassName) }, { children: navigationLinks.map(function (link) { return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)("a", __assign({ href: link.href, className: (0, clsx_1.default)('relative block whitespace-nowrap px-3 py-2 transition', currentPath === link.href ? textActiveColor : textColor) }, { children: [link.name, (0, jsx_runtime_1.jsx)("span", { className: (0, clsx_1.default)('absolute inset-x-1 -bottom-px h-px', currentPath === link.href &&
                                "bg-gradient-to-r  ".concat(underlineFromColor, " ").concat(underlineViaColor, " ").concat(underlineToColor)) })] })) }, link.name)); }) })) })));
};
exports.default = TabHeader;
