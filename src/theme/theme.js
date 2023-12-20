export const themeSettings = () => {
  return {
    palette: {
      primary: {
        light: "#66CCCC",
        main: "#000080",
        dark: "#000033",
      },
      background: {
        alt: "#f2f1f6",
      },
      text: {
        primary: "#666666",
        secondary: "#7e8286",
      },
    },

    typography: {
      fontFamily: ["Noto Sans Display", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Noto Sans Display", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Noto Sans Display", "Ubuntu", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Noto Sans Display", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Noto Sans Display", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Noto Sans Display", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Noto Sans Display", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
