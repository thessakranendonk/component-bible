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
var react_1 = require("react");
var react_2 = require("@headlessui/react");
var clsx_1 = __importDefault(require("clsx"));
var react_icons_1 = require("@patternfly/react-icons");
var HamburgerButton_1 = require("../UI/Buttons/HamburgerButton/HamburgerButton");
/**
 * Header logo link pointing to the home ('/') route.
 */
var LogoLink = function (_a) {
    var onLinkClick = _a.onLinkClick, logo = _a.logo, alt = _a.alt, logoClassName = _a.logoClassName, showSidePanel = _a.showSidePanel;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "/", className: (0, clsx_1.default)('flex mx-auto lg:inline-block w-fit relative', 'focus:outline-none focus-visible:ring focus-visible:ring-black/20 focus-visible:border-transparent', !showSidePanel ? '' : 'transition-opacity duration-300 opacity-0'), onClick: onLinkClick }, { children: (0, jsx_runtime_1.jsx)("img", { className: logoClassName, src: logo, alt: alt }) })) }));
};
/**
 * Header navigation links rendered as React `NavLink` siblings encapsulated within a fragment.
 *
 * Each individual link (anchor tag) has the given `linkClassName` applied as its className and the
 * optional `onLinkClick` set as its `onClick` handler.
 */
var MenuLinks = function (_a) {
    var navigationLinks = _a.navigationLinks, currentActiveLocation = _a.currentActiveLocation, activeLinkClassName = _a.activeLinkClassName, textClassName = _a.textClassName, hoverClassName = _a.hoverClassName, linkClassName = _a.linkClassName, onLinkClick = _a.onLinkClick;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: navigationLinks.map(function (item) {
            return ((0, jsx_runtime_1.jsx)("a", __assign({ href: item.href, className: (0, clsx_1.default)((currentActiveLocation === null || currentActiveLocation === void 0 ? void 0 : currentActiveLocation.includes(item.href)) ? activeLinkClassName : linkClassName, hoverClassName, textClassName, 'font-medium text-center lg:text-left', 'flex flex-col mt-2'), onClick: onLinkClick }, { children: item.name }), item.name));
        }) }));
};
/**
 * Horizontal navigation bar for Desktop that's hidden via CSS media query for viewport widths below the
 * tailwind `lg` breakpoint.
 */
var DesktopIconBar = function (_a) {
    var companyName = _a.companyName, iconNavBarItems = _a.iconNavBarItems, textClassName = _a.textClassName;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "py-6 px-8" }, { children: [(0, jsx_runtime_1.jsx)("a", __assign({ className: "flex justify-start flex-1", href: "/" }, { children: (0, jsx_runtime_1.jsx)("span", __assign({ className: "sr-only" }, { children: companyName })) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "flex" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "flex" }, { children: iconNavBarItems === null || iconNavBarItems === void 0 ? void 0 : iconNavBarItems.map(function (item) { return ((0, jsx_runtime_1.jsxs)("a", __assign({ href: item.iconLink, className: "flex" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "w-14 h-14 ml-12 mr-3" }, { children: item.icon })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex flex-col" }, { children: [(0, jsx_runtime_1.jsx)("p", __assign({ className: (0, clsx_1.default)('text-lg font-medium', textClassName) }, { children: item.title })), (0, jsx_runtime_1.jsx)("p", __assign({ className: (0, clsx_1.default)('text-md text-gray-400', textClassName) }, { children: item.undertext }))] }))] }), item.title)); }) })) }))] })));
};
var DesktopNavBar = function (_a) {
    var navigationLinks = _a.navigationLinks, linkClassName = _a.linkClassName, activeLinkClassName = _a.activeLinkClassName, hoverClassName = _a.hoverClassName, currentActiveLocation = _a.currentActiveLocation;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "hidden space-x-12 lg:flex lg:flex-1 lg:justify-start lg:items-center" }, { children: (0, jsx_runtime_1.jsx)(MenuLinks, { navigationLinks: navigationLinks, linkClassName: linkClassName, hoverClassName: hoverClassName, activeLinkClassName: activeLinkClassName, currentActiveLocation: currentActiveLocation }) })));
};
/**
 * Horizontal navigation bar for Desktop that's hidden via CSS media query for viewport widths below the
 * tailwind `lg` breakpoint.
 */
var MobileIconBar = function (_a) {
    var iconNavBarItems = _a.iconNavBarItems, dropdownBorderColor = _a.dropdownBorderColor, headerBgColor = _a.headerBgColor, textClassName = _a.textClassName;
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_2.Popover.Panel, __assign({ className: (0, clsx_1.default)('absolute right-0 top-20 z-10 w-fit -translate-x-3 transform rounded-lg', headerBgColor) }, { children: (0, jsx_runtime_1.jsx)("ul", __assign({ className: (0, clsx_1.default)(dropdownBorderColor, 'border-2 rounded-lg') }, { children: iconNavBarItems === null || iconNavBarItems === void 0 ? void 0 : iconNavBarItems.map(function (item) { return ((0, jsx_runtime_1.jsx)("li", __assign({ className: "border-b-2 border-gray-200 last:border-0" }, { children: (0, jsx_runtime_1.jsxs)("a", __assign({ href: item.iconLink, className: (0, clsx_1.default)('flex pl-6 pr-10 py-5', 'flex focus:outline-none focus-visible:ring focus-visible:ring-inset focus-visible:ring-black/20') }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "w-12 h-12 mr-4" }, { children: item.icon })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex flex-col" }, { children: [(0, jsx_runtime_1.jsx)("p", __assign({ className: (0, clsx_1.default)('text-md font-medium', textClassName) }, { children: item.title })), (0, jsx_runtime_1.jsx)("p", __assign({ className: (0, clsx_1.default)('text-md text-gray-400', textClassName) }, { children: item.undertext }))] }))] })) }), item.iconLink)); }) })) })) }));
};
/**
 * Header of ProjectLayout that displays branding and implements a responsive navigation menu
 * that leverages HeadlessUI's `Popover` component.
 */
var IconHeader = function (_a) {
    var navigationLinks = _a.navigationLinks, iconNavBarItems = _a.iconNavBarItems, companyName = _a.companyName, companyNameClassName = _a.companyNameClassName, headerBgColor = _a.headerBgColor, linkClassName = _a.linkClassName, hoverClassName = _a.hoverClassName, activeLinkClassName = _a.activeLinkClassName, currentActiveLocation = _a.currentActiveLocation, dropdownBgColor = _a.dropdownBgColor, dropdownBorderColor = _a.dropdownBorderColor, dropdownTextColor = _a.dropdownTextColor, textClassName = _a.textClassName, logo = _a.logo, logoClassName = _a.logoClassName, alt = _a.alt, onMenuClose = _a.onMenuClose, onMenuOpen = _a.onMenuOpen, isPanelOpen = _a.isPanelOpen;
    return ((0, jsx_runtime_1.jsx)("header", { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex justify-between lg:pb-2 lg:border-b-2 lg:border-gray-200/90" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex items-center lg:hidden" }, { children: [!isPanelOpen && ((0, jsx_runtime_1.jsx)("button", __assign({ className: "w-12 left-0 top-0", onClick: onMenuOpen }, { children: (0, jsx_runtime_1.jsx)(HamburgerButton_1.HamburgerButton, { isOpen: isPanelOpen }) }))), (0, jsx_runtime_1.jsx)(react_2.Transition.Root, __assign({ show: isPanelOpen, as: react_1.Fragment }, { children: (0, jsx_runtime_1.jsxs)(react_2.Dialog, __assign({ as: "div", className: "relative z-10", onClose: onMenuClose }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0" }), (0, jsx_runtime_1.jsx)("div", __assign({ className: "fixed inset-0 overflow-hidden" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "absolute inset-0 overflow-hidden" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "pointer-events-none fixed inset-y-0 left-0 flex max-w-full" }, { children: (0, jsx_runtime_1.jsx)(react_2.Transition.Child, __assign({ as: react_1.Fragment, enter: "transform transition ease-in-out duration-500 sm:duration-700", enterFrom: "-translate-x-full", enterTo: "translate-x-0", leave: "transform transition ease-in-out duration-500 sm:duration-700", leaveFrom: "translate-x-0", leaveTo: "-translate-x-full" }, { children: (0, jsx_runtime_1.jsx)(react_2.Dialog.Panel, __assign({ className: "pointer-events-auto w-screen max-w-xs" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "px-4 sm:px-6" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "flex items-start justify-between" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "absolute top-0 right-0 -mr-16 flex pt-4 pr-2 sm:-ml-10 sm:pr-4" }, { children: isPanelOpen && ((0, jsx_runtime_1.jsx)("button", __assign({ className: (0, clsx_1.default)(hoverClassName), onClick: function () { return onMenuClose(); } }, { children: (0, jsx_runtime_1.jsx)(HamburgerButton_1.HamburgerButton, { isOpen: isPanelOpen }) }))) })) })) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "relative mt-6 flex-1 px-4 sm:px-6" }, { children: [logo ? ((0, jsx_runtime_1.jsx)(LogoLink, { logo: logo, alt: alt, logoClassName: logoClassName })) : ((0, jsx_runtime_1.jsx)("a", __assign({ href: "/" }, { children: (0, jsx_runtime_1.jsx)("p", __assign({ className: companyNameClassName }, { children: companyName })) }))), (0, jsx_runtime_1.jsx)("div", __assign({ className: "pt-10" }, { children: (0, jsx_runtime_1.jsx)(MenuLinks, { navigationLinks: navigationLinks, linkClassName: linkClassName, hoverClassName: hoverClassName, activeLinkClassName: activeLinkClassName, currentActiveLocation: currentActiveLocation }) }))] }))] })) })) })) })) })) }))] })) }))] })), logo ? ((0, jsx_runtime_1.jsx)(LogoLink, { logo: logo, alt: alt, logoClassName: logoClassName, showSidePanel: isPanelOpen })) : ((0, jsx_runtime_1.jsx)("a", __assign({ href: "/", className: !isPanelOpen ? '' : 'transition-opacity duration-300 opacity-0' }, { children: (0, jsx_runtime_1.jsx)("p", __assign({ className: (0, clsx_1.default)(companyNameClassName, 'ml-8') }, { children: companyName })) })))] })), (0, jsx_runtime_1.jsx)(react_2.Popover, __assign({ className: (0, clsx_1.default)(headerBgColor, 'flex items-center justify-between') }, { children: function (_a) {
                                var open = _a.open, close = _a.close;
                                return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(react_2.Popover.Button, __assign({ className: (0, clsx_1.default)('flex lg:hidden items-center justify-center p-2.5 mr-3', 'focus:outline-none focus:ring-1 focus-ring-inset focus:ring-black-100', "border-2 ".concat(dropdownBorderColor), open ? dropdownBgColor : 'bg-white') }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "sr-only" }, { children: "'open-navigation-menu'" })), open ? ((0, jsx_runtime_1.jsx)(react_icons_1.ChevronUpIcon, { className: "text-white h-4 w-4" })) : ((0, jsx_runtime_1.jsx)(react_icons_1.ChevronDownIcon, { className: (0, clsx_1.default)(dropdownTextColor, 'h-4 w-4') }))] })) }), (0, jsx_runtime_1.jsx)("div", __assign({ className: (0, clsx_1.default)(headerBgColor, 'hidden lg:inline-flex pr-28') }, { children: (0, jsx_runtime_1.jsx)(DesktopIconBar, { headerBgColor: headerBgColor, iconNavBarItems: iconNavBarItems, navigationLinks: navigationLinks, activeLinkClassName: activeLinkClassName, linkClassName: linkClassName, hoverClassName: hoverClassName, textClassName: textClassName }) }))] }), (0, jsx_runtime_1.jsx)("div", { className: "border-b-2 border-b-gray-200 m-0" }), (0, jsx_runtime_1.jsx)(react_2.Transition, __assign({ show: open, as: react_1.Fragment, enter: "duration-150 ease-out", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "duration-100 ease-in", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95" }, { children: (0, jsx_runtime_1.jsx)(react_2.Popover.Panel, __assign({ focus: true, static: true, className: (0, clsx_1.default)('absolute z-30 top-0 right-0 inset-x-0 transition lg:hidden') }, { children: (0, jsx_runtime_1.jsx)(MobileIconBar, { headerBgColor: headerBgColor, iconNavBarItems: iconNavBarItems, navigationLinks: navigationLinks, linkClassName: linkClassName, hoverClassName: hoverClassName, activeLinkClassName: activeLinkClassName, dropdownBorderColor: dropdownBorderColor }) })) }))] }));
                            } }))] })), (0, jsx_runtime_1.jsx)("nav", __assign({ className: "hidden lg:inline-flex w-screen pl-32 justify-start py-5 border-b-2 border-gray-200/90" }, { children: (0, jsx_runtime_1.jsx)(DesktopNavBar, { navigationLinks: navigationLinks, activeLinkClassName: activeLinkClassName, linkClassName: linkClassName, hoverClassName: hoverClassName, currentActiveLocation: currentActiveLocation }) }))] }) }));
};
exports.default = IconHeader;
