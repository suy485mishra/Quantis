//installing tailwind shades extension first

export const tokens = {
    grey: {
      100: "#f0f0f3",
      200: "#e1e2e7",
      300: "#d1d3da",
      400: "#c2c5ce",
      500: "#b3b6c2",
      600: "#8f929b",
      700: "#6b6d74",
      800: "#48494e",
      900: "#242427",
    },
    primary: {
      // shades of blue
      100: "#e3f2fd", // very light blue
      200: "#bbdefb", // light blue
      300: "#90caf9", // light-medium blue
      400: "#64b5f6", // medium blue
      500: "#42a5f5", // blue
      600: "#2196f3", // medium-dark blue
      700: "#1e88e5", // dark blue
      800: "#1976d2", // very dark blue
      900: "#0d47a1", // almost black blue
    },
    secondary: {
      100: "#e8f5e9",
      200: "#c8e6c9",
      300: "#a5d6a7",
      400: "#81c784",
      500: "#66bb6a",
      600: "#4caf50",
      700: "#43a047",
      800: "#388e3c",
      900: "#2c6b2f",
    }
,    
    
    
    
    
    tertiary: {
      // purple
      500: "#ff8d19",
    },
    background: {
      light: "#2d2d34",
      main: "#1f2026",
    },
  };
  
  // mui theme settings
  export const themeSettings = {
    palette: {
      primary: {
        ...tokens.primary,
        main: tokens.primary[500],
        light: tokens.primary[400],
      },
      secondary: {
        ...tokens.secondary,
        main: tokens.secondary[500],
      },
      tertiary: {
        ...tokens.tertiary,
      },
      grey: {
        ...tokens.grey,
        main: tokens.grey[500],
      },
      background: {
        default: tokens.background.main,
        light: tokens.background.light,
      },
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 800,
        color: tokens.grey[200],
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 600,
        color: tokens.grey[300],
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        fontWeight: 400,
        color: tokens.grey[500],
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 10,
        color: tokens.grey[700],
      },
    },
  };