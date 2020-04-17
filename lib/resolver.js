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
function resolveShorthands(_a) {
    var aliases = _a.aliases, theme = _a.theme;
    return Object.entries(aliases).reduce(function (all, _a) {
        var _b;
        var property = _a[0], value = _a[1];
        var shorthand = theme === null || theme === void 0 ? void 0 : theme.shorthands[property];
        if (shorthand) {
            var unfold = shorthand.reduce(function (a, s) {
                var _a;
                return (__assign(__assign({}, a), (_a = {}, _a[s] = value, _a)));
            }, {});
            return __assign(__assign({}, all), unfold);
        }
        return __assign(__assign({}, all), (_b = {}, _b[property] = value, _b));
    }, {});
}
exports.resolveShorthands = resolveShorthands;
function resolveAliases(_a) {
    var styles = _a.styles, theme = _a.theme;
    return Object.entries(styles).reduce(function (all, _a) {
        var _b, _c;
        var property = _a[0], value = _a[1];
        var alias = theme === null || theme === void 0 ? void 0 : theme.aliases[property];
        if (alias) {
            return __assign(__assign({}, all), (_b = {}, _b[alias] = value, _b));
        }
        return __assign(__assign({}, all), (_c = {}, _c[property] = value, _c));
    }, {});
}
exports.resolveAliases = resolveAliases;
