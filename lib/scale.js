"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
exports.SCREEN_WIDTH = (_a = react_native_1.Dimensions.get('window'), _a.width), exports.SCREEN_HEIGHT = _a.height;
// based on iPhone 8's scale
var wscale = exports.SCREEN_WIDTH / 375;
var hscale = exports.SCREEN_HEIGHT / 667;
function normalize(size, based) {
    if (based === void 0) { based = 'width'; }
    var newSize = based === 'height' ? size * hscale : size * wscale;
    if (react_native_1.Platform.OS === 'ios') {
        return Math.round(react_native_1.PixelRatio.roundToNearestPixel(newSize));
    }
    else {
        return Math.round(react_native_1.PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}
exports.normalize = normalize;
function getScaleValue(_a) {
    var value = _a.value, scale = _a.scale;
    var scaleValue = scale === null || scale === void 0 ? void 0 : scale[value];
    if (scaleValue) {
        return scaleValue;
    }
    if (typeof value === 'string' && new RegExp('rpx').test(value)) {
        return normalize(parseInt(value.replace('rpx', '')));
    }
    return value;
}
exports.getScaleValue = getScaleValue;
