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
var react_leaflet_1 = require("react-leaflet");
var LocationMap = function (_a) {
    var mapLocationDetails = _a.mapLocationDetails, mapCenter = _a.mapCenter, zoomNumber = _a.zoomNumber, mapClassName = _a.mapClassName, mapSize = _a.mapSize;
    var position = mapCenter;
    var zoom = zoomNumber;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: mapClassName }, { children: (0, jsx_runtime_1.jsxs)(react_leaflet_1.MapContainer, __assign({ center: position, zoom: zoom, scrollWheelZoom: false, className: mapSize }, { children: [(0, jsx_runtime_1.jsx)(react_leaflet_1.TileLayer, { attribution: "\u00A9 <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors", url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }), mapLocationDetails.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(react_leaflet_1.Marker, __assign({ position: [item.lat, item.lon], title: "".concat(item.company, " at ").concat(item.location) }, { children: (0, jsx_runtime_1.jsxs)(react_leaflet_1.Popup, { children: [(0, jsx_runtime_1.jsxs)("strong", { children: [item.company, " at ", item.location] }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("p", { children: item.location }), item.description && (0, jsx_runtime_1.jsx)("em", { children: item.description })] }) }), index)); })] })) })));
};
exports.default = LocationMap;
