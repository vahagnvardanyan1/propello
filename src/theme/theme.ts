import { createTheme } from "@mui/material/styles";

// Propello Brand Colors
export const colors = {
  midnightBlue: "#1C2E4A",
  deepNavy: "#041A2B",
  dustyBlue: "#52677D",
  ivory: "#BDC4D4",
  buttercream: "#D1CFC9",
  white: "#ffffff",
};

// Create MUI theme matching the existing design system
export const theme = createTheme({
  palette: {
    primary: {
      main: colors.midnightBlue,
      dark: colors.deepNavy,
      light: colors.dustyBlue,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.buttercream,
      light: colors.ivory,
      contrastText: colors.midnightBlue,
    },
    background: {
      default: colors.white,
      paper: colors.white,
    },
    text: {
      primary: colors.midnightBlue,
      secondary: colors.dustyBlue,
    },
  },
  typography: {
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h1: {
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: "-0.02em",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: "-0.02em",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: "-0.02em",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: "-0.02em",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: "-0.02em",
      fontWeight: 500,
    },
    h6: {
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: "-0.02em",
      fontWeight: 500,
    },
  },
  spacing: 4, // 4px base unit for 8pt grid (8 = 2 * 4)
  shape: {
    borderRadius: 12, // default border radius
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "12px",
          padding: "12px 24px",
          fontWeight: 500,
          fontSize: "16px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: "smooth",
        },
        "::selection": {
          background: colors.buttercream,
          color: colors.midnightBlue,
        },
      },
    },
  },
});

// Custom spacing values matching the 8pt grid system
export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "12px",
  base: "16px",
  lg: "20px",
  xl: "24px",
  "2xl": "32px",
  "3xl": "40px",
  "4xl": "48px",
  "5xl": "64px",
  "6xl": "80px",
  "7xl": "96px",
};

// Border radius values
export const borderRadius = {
  xs: "6px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "32px",
  full: "9999px",
};

// Shadow system
export const shadows = {
  xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
};

// Transition timing
export const transitions = {
  fast: "150ms",
  base: "200ms",
  slow: "300ms",
  slower: "500ms",
};

// Easing functions
export const easings = {
  smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
  out: "cubic-bezier(0, 0, 0.2, 1)",
  in: "cubic-bezier(0.4, 0, 1, 1)",
  inOut: "cubic-bezier(0.4, 0, 0.6, 1)",
  bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
};

// Z-index scale
export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};
