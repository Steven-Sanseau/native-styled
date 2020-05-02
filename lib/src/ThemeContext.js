import React from 'react';
const ThemeContext = React.createContext(null);
export const ThemeProvider = ({ children, theme, }) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
export const useTheme = () => {
    return React.useContext(ThemeContext);
};
