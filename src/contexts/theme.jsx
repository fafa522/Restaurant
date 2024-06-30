import React, { useCallback, useContext, useMemo, useState } from 'react';

export const ThemeContext = React.createContext('default');

export function useTheme(defaultTheme = 'default') {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) =>
      currentTheme === 'default' ? 'dark' : 'default'
    );
  }, []);
  return { theme, toggleTheme };
}

export function useCurrentTheme() {
  return useContext(ThemeContext);
}

export const ThemeContextProvider = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  const themeContextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
