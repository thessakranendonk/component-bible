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
var react_1 = require("@headlessui/react");
var outline_1 = require("@heroicons/react/24/outline");
var react_icons_1 = require("@patternfly/react-icons");
var clsx_1 = __importDefault(require("clsx"));
var MapInfoSidePanel = function (_a) {
    var mapContactInfo = _a.mapContactInfo, businessHours = _a.businessHours, textClassName = _a.textClassName, h2ClassName = _a.h2ClassName, hoverClassName = _a.hoverClassName, isMapInfoPanelOpen = _a.isMapInfoPanelOpen, panelButtonClassName = _a.panelButtonClassName, onMapOpen = _a.onMapOpen, onMapClose = _a.onMapClose;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_1.Transition, __assign({ show: isMapInfoPanelOpen }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "relative bg-white p-10 z-50 h-mapSidePanelXL w-fit" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: " bg-white" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex flex-col overflow-y-scroll" }, { children: [(0, jsx_runtime_1.jsx)("h2", __assign({ className: (0, clsx_1.default)('pb-8', h2ClassName) }, { children: "HOURS" })), businessHours.map(function (item) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, clsx_1.default)('flex justify-between border-b-2 last:border-0 py-2', textClassName) }, { children: [(0, jsx_runtime_1.jsx)("p", __assign({ className: "font-semibold text-md" }, { children: item.day })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "text-md font-extralight pl-12" }, { children: item.hours }))] }), item.day)); })] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "pt-12" }, { children: [(0, jsx_runtime_1.jsx)("h2", __assign({ className: (0, clsx_1.default)(' pb-8', h2ClassName) }, { children: "CONTACT US" })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, clsx_1.default)('flex flex-col', textClassName) }, { children: [(0, jsx_runtime_1.jsxs)("p", __assign({ className: "text-md pb-3" }, { children: [(0, jsx_runtime_1.jsx)(outline_1.MapPinIcon, { className: "inline-flex w-4 h-4 mr-3" }), mapContactInfo.address] })), (0, jsx_runtime_1.jsxs)("a", __assign({ className: (0, clsx_1.default)('text-md pb-3', hoverClassName), href: "mailto: ".concat(mapContactInfo.email) }, { children: [(0, jsx_runtime_1.jsx)(outline_1.EnvelopeIcon, { className: "inline-flex w-4 h-4 mr-3" }), mapContactInfo.email] })), (0, jsx_runtime_1.jsxs)("a", __assign({ href: "tel:".concat(mapContactInfo.phone) }, { children: [(0, jsx_runtime_1.jsx)(outline_1.PhoneIcon, { className: "inline-flex w-4 h-4 mr-3" }), mapContactInfo.phone] }))] }))] }))] })) })) })), isMapInfoPanelOpen ? ((0, jsx_runtime_1.jsx)("div", __assign({ className: "relative h-mapSidePanelXL bg-white z-50 flex flex-col justify-center" }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: (0, clsx_1.default)('w-fit h-fit text-white p-2', panelButtonClassName), onClick: onMapClose }, { children: (0, jsx_runtime_1.jsx)(react_icons_1.ChevronLeftIcon, { className: "w-6 h-6" }) })) }))) : ((0, jsx_runtime_1.jsx)("div", __assign({ className: "relative h-mapSidePanelXL bg-white z-50 flex flex-col justify-center" }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: (0, clsx_1.default)('w-fit h-fit text-white p-2', panelButtonClassName), onClick: onMapOpen }, { children: (0, jsx_runtime_1.jsx)(react_icons_1.ChevronRightIcon, { className: "w-6 h-6" }) })) })))] }));
};
exports.default = MapInfoSidePanel;
