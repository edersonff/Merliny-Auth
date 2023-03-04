import { createTheme } from "@nextui-org/react";
import { darkColors, whiteColors } from "./pages/theme";

export const lightTheme = createTheme({
  type: "white",
  theme: {
    colors: {
      primaryLight: "#c6baff",
      primaryLightHover: "#b3a1ff",
      primaryLightActive: "#9c85ff",
      primaryLightContrast: "#010101",
      primary: "#5f22d9",
      primaryBorder: "#2c016d",
      primaryBorderHover: "#400090",
      primarySolidHover: "#4c1da0",
      primarySolidContrast: "#ffffff",
      primaryShadow: "rgba(95, 34, 217, 0.5)",
      gradient: "linear-gradient(45deg, #5f22d9, #ac73ff)",
      link: "#5f22d9",

      ...whiteColors,
    },
    fonts: {
      sans: "Inter, sans-serif",
      mono: "Inter, sans-serif",
    },
  },
});

export const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primaryLight: "#c6baff",
      primaryLightHover: "#b3a1ff",
      primaryLightActive: "#9c85ff",
      primaryLightContrast: "#010101",
      primary: "#5f22d9",
      primaryBorder: "#2c016d",
      primaryBorderHover: "#400090",
      primarySolidHover: "#4c1da0",
      primarySolidContrast: "#ffffff",
      primaryShadow: "rgba(95, 34, 217, 0.5)",
      gradient: "linear-gradient(45deg, #5f22d9, #ac73ff)",
      link: "#5f22d9",

      ...darkColors,

      inputBorderColor: "red",
    },
    fonts: {
      sans: "Inter, sans-serif",
      mono: "Inter, sans-serif",
    },
  },
});
