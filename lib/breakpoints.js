"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var ThemeContext_1 = require("./ThemeContext");
function useViewportWidth() {
    var _a = react_1.default.useState(0), width = _a[0], setWidth = _a[1];
    var layoutEffect = typeof window !== 'undefined' ? react_1.default.useLayoutEffect : react_1.default.useEffect;
    layoutEffect(function () {
        setWidth(react_native_1.Dimensions.get('window').width);
        function handleResize() {
            setWidth(react_native_1.Dimensions.get('window').width);
        }
        react_native_1.Dimensions.addEventListener('change', handleResize);
        return function () { return react_native_1.Dimensions.removeEventListener('change', handleResize); };
    }, []);
    return width;
}
exports.useViewportWidth = useViewportWidth;
function useBreakpoint() {
    var theme = ThemeContext_1.useTheme();
    if (!theme) {
        return 'xs';
    }
    var breakpoints = theme.breakpoints;
    var width = useViewportWidth();
    return react_1.default.useMemo(function () {
        return (Object.keys(breakpoints)
            .reverse()
            .find(function (breakpoint) { return width > breakpoints[breakpoint]; }) || 'xs');
    }, [width]);
}
exports.useBreakpoint = useBreakpoint;
function useResponsiveProps() {
    var current = useBreakpoint();
    return function getProps(values) {
        if (typeof values !== 'object') {
            return values;
        }
        if (values[current] === undefined) {
            return values[Object.keys(values)[Object.keys(values).length - 1]];
        }
        return values[current];
    };
}
exports.useResponsiveProps = useResponsiveProps;
