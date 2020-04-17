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
var ThemeContext_1 = require("./ThemeContext");
var breakpoints_1 = require("./breakpoints");
var scale_1 = require("./scale");
var resolver_1 = require("./resolver");
function useStyling() {
    var theme = ThemeContext_1.useTheme();
    var responsive = breakpoints_1.useResponsiveProps();
    return function sx(styles) {
        if (!theme) {
            return styles;
        }
        var aliases = resolver_1.resolveAliases({ styles: styles, theme: theme });
        var shorthands = resolver_1.resolveShorthands({ aliases: aliases, theme: theme });
        var resolvedStyles = Object.entries(shorthands).reduce(function (all, _a) {
            var _b;
            var property = _a[0], value = _a[1];
            var scale = theme.resolvers[property];
            return __assign(__assign({}, all), (_b = {}, _b[property] = scale_1.getScaleValue({
                value: responsive(value),
                scale: theme.scales[scale],
            }), _b));
        }, {});
        return resolvedStyles;
    };
}
exports.useStyling = useStyling;
