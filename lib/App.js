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
var react_router_dom_1 = require("react-router-dom");
var components_1 = require("./components");
var outline_1 = require("@heroicons/react/24/outline");
require("./index.css");
// import { AlertPopup } from './components';
var react_1 = require("react");
var clsx_1 = __importDefault(require("clsx"));
var LocationMap_1 = __importDefault(require("./components/LocationMap"));
var logo = require('../src/assets/runnymede.png');
var iconNavBarItems = [
    {
        icon: (0, jsx_runtime_1.jsx)(outline_1.ClockIcon, { className: "text-red-900" }),
        iconLink: '/clock',
        title: 'Monday - Friday',
        undertext: '8am to 5pm',
    },
    {
        icon: (0, jsx_runtime_1.jsx)(outline_1.PhoneIcon, { className: "text-red-900" }),
        iconLink: '/call',
        title: '519-861-4813',
        undertext: 'Give us a Call',
    },
    {
        icon: (0, jsx_runtime_1.jsx)(outline_1.MapPinIcon, { className: "text-red-900" }),
        iconLink: '/location',
        title: 'Bloor West Village',
        undertext: 'Toronto, Ontario',
    },
];
var navigationLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Hours & Location', href: '/hours' },
    { name: 'Our Policy', href: '/policy' },
];
var locationsList = [
    {
        company: 'Runnymede Medical Clinic',
        location: 'Jernbanetorget 1, Østbanehallen',
        lat: 43.65102,
        lon: -79.47588,
    },
];
var heroImageBarItems = ['Pregnancy', 'Work Related Injuries', 'Vaccinations', 'On-site Pharmacy'];
var hours = [
    { day: 'Mon', hours: '10:00 AM - 4:00 PM' },
    { day: 'Tue', hours: '10:00 AM - 4:00 PM' },
    { day: 'Wed', hours: '10:00 AM - 4:00 PM' },
    { day: 'Thu', hours: '10:00 AM - 4:00 PM' },
    { day: 'Fri', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sat', hours: '10:00 AM - 1:00 PM' },
];
var contact = {
    address: '263 Augusta Ave, Toronto',
    phone: '418-585-2154',
    fax: 'dfsfsdsfsd',
};
var images = [
    'https://www.runnymedewalkinmedical.com/s/cc_images/teaserbox_937720354.jpg?t=1583413808',
    'https://www.runnymedewalkinmedical.com/s/cc_images/cache_957645592.jpg',
    'https://www.runnymedewalkinmedical.com/s/cc_images/cache_957645591.jpg',
];
var App = function () {
    var _a = (0, react_1.useState)(false), isSidePanelVisible = _a[0], setIsSidePanelVisible = _a[1];
    var _b = (0, react_1.useState)(true), isMapSidePanelVisible = _b[0], setMapIsSidePanelVisible = _b[1];
    var closeSidePanel = function () {
        setIsSidePanelVisible(false);
    };
    var openSidePanel = function () {
        setIsSidePanelVisible(true);
    };
    var closeMapSidePanel = function () {
        setMapIsSidePanelVisible(false);
    };
    var openMapSidePanel = function () {
        setMapIsSidePanelVisible(true);
    };
    var location = (0, react_router_dom_1.useLocation)();
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, clsx_1.default)(isSidePanelVisible
            ? 'transition transform ease-in duration-500 delay-100 translate-x-80'
            : 'transition transform ease-in-out duration-500 delay-100 translate-x-0') }, { children: [(0, jsx_runtime_1.jsx)(components_1.IconHeader, { companyName: "Daniel Medical Clinic", companyNameClassName: "", logo: logo, navigationLinks: navigationLinks, iconNavBarItems: iconNavBarItems, headerBgColor: "bg-white", dropdownBgColor: "bg-yellow-900", dropdownBorderColor: "border-red-900", dropdownTextColor: "text-red-900", textClassName: "font-serif", linkClassName: "text-black text-md font-normal font-serif", logoClassName: "h-20 mt-6 pl-8 lg:h-24 lg:pl-32 lg:mt-4", hoverClassName: "hover:text-yellow-400", activeLinkClassName: "text-red-900 font-serif", currentActiveLocation: location.pathname, onMenuOpen: openSidePanel, onMenuClose: closeSidePanel, isPanelOpen: isSidePanelVisible }), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "static flex mx-auto justify-center bg-red-900 w-mapXLBg h-fit p-8" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "flex justify-start w-full" }, { children: (0, jsx_runtime_1.jsx)(components_1.MapInfoSidePanel, { mapContactInfo: contact, businessHours: hours, textClassName: "font-serif", h2ClassName: "font-semibold font-serif text-2xl", isMapInfoPanelOpen: isMapSidePanelVisible, panelButtonClassName: "bg-red-900", onMapOpen: openMapSidePanel, onMapClose: closeMapSidePanel }) })), (0, jsx_runtime_1.jsx)(LocationMap_1.default, { mapLocationDetails: locationsList, mapCenter: [43.65102, -79.47588], zoomNumber: 16, mapClassName: "absolute inset-x-center m-auto", mapSize: "w-mapXL h-mapSidePanelXL" })] }))] })));
};
exports.default = App;
