"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
// import { Route, Switch } from 'react-router-dom';
var components_1 = require("./components");
var SimpleButton_1 = __importDefault(require("./components/SimpleButton"));
require("./index.css");
// import PageFooter from './components/PageFooter/PageFooter';
// import PageHeader from './components/PageHeader/PageHeader';
// import HeaderImageBar from './components/HeaderImageBar/HeaderImageBar';
// import LogOut from './components/LogOut/LogOut';
var App = function () {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(components_1.Popup, { title: "test", position: "bottom-right", variant: "danger" }, "index"), (0, jsx_runtime_1.jsx)(SimpleButton_1.default, { text: "test" }), (0, jsx_runtime_1.jsx)("main", { className: "main-content" })] }));
};
exports.default = App;
