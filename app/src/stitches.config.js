import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      dark: "#94d2bd",
      light: "#e9d8a6",
      primary: "#005f73",
      secondary: "#0a9396",
      tertiary: "#94d2bd",
      // find the full pallette here: https://coolors.co/u/the_k if you want to add more colors

    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px"
    }
  },
  media: {
    mobileSmall: "(min-width: 376px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1024px)"
  },
  utils: {
    columnGap: (gap) => ({
      flexDirection: "column",
      gap: `var(--space-${gap})`
    }),
    rowGap: (gap) => ({
      flexDirection: "row",
      gap: `var(--space-${gap})`
    })
  }
});
