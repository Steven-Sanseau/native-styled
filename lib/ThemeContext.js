"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.ThemeContext = react_1.default.createContext(null);
exports.ThemeProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
    return <exports.ThemeContext.Provider value={theme}>{children}</exports.ThemeContext.Provider>;
};
exports.useTheme = function () {
    return react_1.default.useContext(exports.ThemeContext);
};
