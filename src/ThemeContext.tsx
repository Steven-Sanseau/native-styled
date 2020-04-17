import React, { ReactElement, CSSProperties } from 'react'

export interface ScaleTokens<T extends keyof CSSProperties> {
  [key: string]: NonNullable<CSSProperties[T]>
}

export interface CommonTheme {
  breakpoints: {
    [key: string]: keyof string
  }
  shorthands: { [key: string]: ReadonlyArray<keyof CSSProperties> }
  aliases: {
    [key: string]: keyof CSSProperties
  }
}

export interface StaticTheme extends CommonTheme {
  scales: {
    spaces: ScaleTokens<'margin'>
    sizes: ScaleTokens<'width'>
    fontFamily: ScaleTokens<'fontFamily'>
    fontSizes: ScaleTokens<'fontSize'>
    fontWeights: ScaleTokens<'fontWeight'>
    lineHeight: ScaleTokens<'lineHeight'>
    colors: ScaleTokens<'color'>
    letterSpacing: ScaleTokens<'letterSpacing'>
    border: ScaleTokens<'border'>
    borderWidth: ScaleTokens<'borderWidth'>
    radius: ScaleTokens<'borderRadius'>
    shadow: ScaleTokens<'boxShadow'>
    opacity: ScaleTokens<'opacity'>
    zIndex: ScaleTokens<'zIndex'>
    duration: ScaleTokens<'animationDuration'>
  }
  resolvers: {
    [key in keyof CSSProperties]: keyof this['scales']
  }
}

type ThemeContextProps = StaticTheme | null
export const ThemeContext = React.createContext<ThemeContextProps>(null)

interface ThemeProviderProps {
  theme: StaticTheme
}
export const ThemeProvider = ({
  children,
  theme,
}: React.PropsWithChildren<ThemeProviderProps>): ReactElement => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextProps => {
  return React.useContext(ThemeContext)
}
