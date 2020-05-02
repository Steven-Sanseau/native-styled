import React from 'react';
import { Dimensions } from 'react-native';
export function useViewportWidth() {
    const [width, setWidth] = React.useState(0);
    const layoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
    layoutEffect(() => {
        setWidth(Dimensions.get('window').width);
        function handleResize() {
            setWidth(Dimensions.get('window').width);
        }
        Dimensions.addEventListener('change', handleResize);
        return () => Dimensions.removeEventListener('change', handleResize);
    }, []);
    return width;
}
export function useBreakpoint() {
    const width = useViewportWidth();
    const breakpoints = { xs: 640, sm: 768, md: 1024, lg: 1280 };
    return React.useMemo(() => {
        return (Object.keys(breakpoints)
            .reverse()
            .find((breakpoint) => width > breakpoints[breakpoint]) || 'xs');
    }, [width, breakpoints]);
}
export function useResponsiveProps() {
    const current = useBreakpoint();
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
