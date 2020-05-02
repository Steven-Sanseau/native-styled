import { useTheme } from './ThemeContext';
import { useResponsiveProps } from './breakpoints';
import { getScaleValue } from './scale';
import { resolveShorthands, resolveAliases } from './resolver';
export const useStyling = () => {
    const theme = useTheme();
    const responsive = useResponsiveProps();
    return (styles) => {
        if (!styles) {
            return null;
        }
        if (!theme) {
            return styles;
        }
        const aliases = resolveAliases({ styles, theme });
        const shorthands = resolveShorthands({ aliases, theme });
        const resolvedStyles = Object.entries(shorthands).reduce((all, [property, value]) => {
            const scale = theme.resolvers[property];
            return {
                ...all,
                [property]: getScaleValue({
                    value: responsive(value),
                    scale: theme.scales[scale],
                }),
            };
        }, {});
        return resolvedStyles;
    };
};
