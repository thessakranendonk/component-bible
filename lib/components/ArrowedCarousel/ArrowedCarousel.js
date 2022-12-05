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
var react_1 = require("react");
var ArrowedCarousel = function (_a) {
    var carouselClassName = _a.carouselClassName, alt = _a.alt, images = _a.images;
    var _b = (0, react_1.useState)(0), currentImage = _b[0], setCurrentImage = _b[1];
    var refs = images.reduce(function (acc, val, i) {
        acc[i] = (0, react_1.createRef)();
        return acc;
    }, {});
    var scrollToImage = function (i) {
        // Set the index of the image we want to see next
        setCurrentImage(i);
        refs[i].current.scrollIntoView({
            //     Defines the transition animation.
            behavior: 'smooth',
            //      Defines vertical alignment.
            block: 'nearest',
            //      Defines horizontal alignment.
            inline: 'start',
        });
    };
    var totalImages = images.length;
    // Below functions will assure that after last image we'll scroll back to the start,
    // or another way round - first to last in previousImage method.
    var nextImage = function () {
        if (currentImage >= totalImages - 1) {
            scrollToImage(0);
        }
        else {
            scrollToImage(currentImage + 1);
        }
    };
    var previousImage = function () {
        if (currentImage === 0) {
            scrollToImage(totalImages - 1);
        }
        else {
            scrollToImage(currentImage - 1);
        }
    };
    // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
    var arrowStyle = 'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';
    var sliderControl = function (isLeftButton) { return ((0, jsx_runtime_1.jsx)("button", __assign({ type: "button", onClick: isLeftButton ? previousImage : nextImage, className: "".concat(arrowStyle, " ").concat(isLeftButton ? 'left-2' : 'right-2'), style: { top: '40%' } }, { children: (0, jsx_runtime_1.jsx)("span", __assign({ role: "img", "aria-label": "Arrow ".concat(isLeftButton ? 'left' : 'right') }, { children: isLeftButton ? '◀' : '▶' })) }))); };
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, clsx_1.default)('flex justify-center items-center mx-auto', carouselClassName) }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "relative w-full" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, clsx_1.default)('flex overflow-x-hidden snap-mandatory snap-x', carouselClassName) }, { children: [sliderControl(true), images.map(function (img, i) { return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "w-full flex-shrink-0", ref: refs[i] }, { children: (0, jsx_runtime_1.jsx)("img", { src: img, className: (0, clsx_1.default)('object-cover ', carouselClassName), alt: alt }) }), img)); }), sliderControl()] })) })) })));
};
exports.default = ArrowedCarousel;
