import React, { ReactElement } from 'react'

type ThemeContextProps = any
const ThemeContext = React.createContext<ThemeContextProps>(null)

interface ThemeProviderProps {
  theme: any
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
