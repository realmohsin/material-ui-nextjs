"use client";

import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

// const primaryColor = '#EF3829'
// const primaryColor = "#ffbd59";
const primaryColor = "rgba(0, 0, 0, 0.7)";
// const secondaryColor = '#191922'
// const secondaryColor = "#2F3953";
const secondaryColor = "#ffbd59";
const gray1 = "#808085";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    common: {
      gray1,
    },
    // mode: "light",
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: roboto.style.fontFamily,
    body1: {
      fontSize: "1.6rem",
      lineHeight: "1.5",
      letterSpacing: "0.3px",
      color: "#000000",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before, *::after": {
          margin: 0,
          padding: 0,
        },
        html: {
          fontSize: "62.5%",
          "@media (max-width: 1280px)": {
            fontSize: "60%",
          },
          "@media (max-width: 960px)": {
            fontSize: "58%",
          },
          "@media (max-width: 600px)": {
            fontSize: "53%",
          },
        },
        a: {
          // display: "block",
          textDecoration: "none",
          color: "inherit",
        },
        img: {
          display: "block",
        },
        "input, button, textarea, select": {
          display: "block",
          font: "inherit",
        },
        ul: {
          listStyle: "none",
        },
        "::selection": {
          backgroundColor: primaryColor,
          color: "white",
        },
        "a, button": {
          cursor: "pointer",
        },
      },
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: "1.2em",
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "2rem",
          paddingRight: "2rem",
          "@media (min-width: 600px)": {
            paddingLeft: "4rem",
            paddingRight: "4rem",
          },
          "@media (min-width: 960px)": {
            paddingLeft: "6rem",
            paddingRight: "6rem",
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
  custom: {
    title1: {
      fontSize: "4.6rem",
      fontWeight: 400,
    },
    title2: {
      fontSize: "4rem",
      fontWeight: 700,
    },
    title3: {},
    title4: {},
    title5: {},
    themedBorderAndPadding: {
      // styles for container with themed left border
      borderLeft: `12px solid ${primaryColor}`,
      paddingLeft: "3rem",
      "@media (max-width: 600px)": {
        borderLeft: `7px solid ${primaryColor}`,
        paddingLeft: "2.4rem",
      },
    },
    themedArrowForBefore: {
      // styles for ::before of text to be pointed at
      // manually add 'top' value afterwards
      content: '""',
      borderColor: `transparent ${primaryColor}`,
      borderStyle: "solid",
      borderWidth: "0.35em 0 0.35em 0.45em",
      display: "block",
      height: 0,
      width: 0,
      fontSize: "2.2rem",
      position: "relative",
      left: "-3.1rem",
      "@media (max-width: 600px)": {
        left: "-2.4rem",
      },
    },
  },
});

export default theme;
