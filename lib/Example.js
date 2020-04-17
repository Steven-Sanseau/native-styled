"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var default_1 = require("./src/default");
var ThemeContext_1 = require("./src/ThemeContext");
var useStyling_1 = require("./src/useStyling");
function Box(_a) {
    var sx = _a.sx, props = __rest(_a, ["sx"]);
    var styling = useStyling_1.useStyling();
    var styles = react_native_1.StyleSheet.create({ box: styling(sx) });
    return <react_native_1.Text style={styles.box} {...props}/>;
}
function App() {
    return (<ThemeContext_1.ThemeProvider theme={default_1.defaultTheme}>
      <Box sx={{
        width: '2/5',
        m: 4,
        color: { xs: 'blue', md: 'blue', lg: 'red' },
        fontSize: { xs: 12, lg: '13rpx' },
    }}>
        Open up App.tsx to start working on your app!
      </Box>
      <Box sx={{ px: 4, color: 'red', fontSize: '12rpx' }}>
        Open up App.tsx to start working on your app!
      </Box>
    </ThemeContext_1.ThemeProvider>);
}
exports.default = App;
