import React from 'react';
interface ThemeProviderProps {
    theme: any;
}
export declare const ThemeProvider: ({ children, theme, }: React.PropsWithChildren<ThemeProviderProps>) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
export declare const useTheme: () => any;
export {};
