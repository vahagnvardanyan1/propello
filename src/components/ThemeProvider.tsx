"use client";

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";

import { theme } from "@/theme/theme";

const LayoutWrapper = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",

  "& main": {
    flex: 1,
    paddingTop: "64px",

    "@media (min-width: 768px)": {
      paddingTop: "80px",
    },
  },
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <LayoutWrapper>{children}</LayoutWrapper>
    </MuiThemeProvider>
  );
};
