"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
// import AlertPopup from './components/AlertPopup';
// import SimpleButton from './components/SimpleButton';
var react_router_dom_1 = require("react-router-dom");
var components_1 = require("./components");
var outline_1 = require("@heroicons/react/24/outline");
require("./index.css");
var react_1 = require("react");
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
var App = function () {
    var _a = (0, react_1.useState)(false), isSidePanelVisible = _a[0], setIsSidePanelVisible = _a[1];
    var closeSidePanel = function () {
        setIsSidePanelVisible(false);
    };
    var openSidePanel = function () {
        setIsSidePanelVisible(true);
    };
    var location = (0, react_router_dom_1.useLocation)();
    console.log(location.pathname);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(components_1.IconHeader, { headerTitle: "Hello", logo: logo, navigationLinks: navigationLinks, iconNavBarItems: iconNavBarItems, headerBgColor: "bg-white", buttonBgColor: "bg-red-900", buttonBorderColor: "border-red-900", buttonTextColor: "text-red-900", linkClassName: "text-black text-md font-normal", logoClassName: "h-20 mt-6 pl-8 lg:h-24 lg:pl-32 lg:mt-4", hoverClassName: "hover:text-yellow-400", activeLinkClassName: "text-red-900", currentActiveLocation: location.pathname, onMenuOpen: openSidePanel, onMenuClose: closeSidePanel, isPanelOpen: isSidePanelVisible }), (0, jsx_runtime_1.jsx)("main", { className: "main-content" })] }));
};
exports.default = App;
