import React, { CSSProperties } from 'react';
export interface ScaleTokens<T extends keyof CSSProperties> {
    [key: string]: NonNullable<CSSProperties[T]>;
}
export interface CommonTheme {
    breakpoints: {
        [key: string]: keyof string;
    };
    shorthands: {
        [key: string]: ReadonlyArray<keyof CSSProperties>;
    };
    aliases: {
        [key: string]: keyof CSSProperties;
    };
}
export interface StaticTheme extends CommonTheme {
    scales: {
        spaces: ScaleTokens<'margin'>;
        sizes: ScaleTokens<'width'>;
        fontFamily: ScaleTokens<'fontFamily'>;
        fontSizes: ScaleTokens<'fontSize'>;
        fontWeights: ScaleTokens<'fontWeight'>;
        lineHeight: ScaleTokens<'lineHeight'>;
        colors: ScaleTokens<'color'>;
        letterSpacing: ScaleTokens<'letterSpacing'>;
        border: ScaleTokens<'border'>;
        borderWidth: ScaleTokens<'borderWidth'>;
        radius: ScaleTokens<'borderRadius'>;
        shadow: ScaleTokens<'boxShadow'>;
        opacity: ScaleTokens<'opacity'>;
        zIndex: ScaleTokens<'zIndex'>;
        duration: ScaleTokens<'animationDuration'>;
    };
    resolvers: {
        [key in keyof CSSProperties]: keyof this['scales'];
    };
}
export declare const ThemeContext: React.Context<StaticTheme>;
interface ThemeProviderProps {
    theme: StaticTheme;
}
export declare const ThemeProvider: ({ children, theme, }: React.PropsWithChildren<ThemeProviderProps>) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
export declare const useTheme: () => StaticTheme;
export {};
