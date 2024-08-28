import React from "react";
import { darkTheme, lightTheme } from "src/constants/colors";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

interface ThemeProviderProps {
  children: React.ReactNode;
  isDarkMode: boolean;
}

const ThemeProvider = ({ children, isDarkMode }: ThemeProviderProps) => {
  const theme = isDarkMode ? darkTheme : lightTheme;
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
