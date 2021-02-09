import { merge } from "theme-ui"
import { tailwind } from "@theme-ui/presets"
import originalTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index"

const theme = merge(originalTheme, {
  initialColorModeName: "dark",
  colors: {
    modes: {
      dark: {
        text: tailwind.colors.gray[5],
        primary: tailwind.colors.gray[4],
        secondary: tailwind.colors.gray[6],
        toggleIcon: tailwind.colors.gray[5],
        background: tailwind.colors.gray[9],
        heading: "#bebbae",
        divide: tailwind.colors.gray[8],
        muted: tailwind.colors.gray[8],
      },
      light: {
        background: tailwind.colors.gray[1],
        heading: tailwind.colors.gray[8],
        primary: tailwind.colors.yellow[8],
      },
    },
  },
  styles: {
    a: {
      color: "text",
      backgroundImage: `linear-gradient(to bottom, rgba(236, 201, 75, 0.4) 90%, ${tailwind.colors.yellow[5]} 100%)`,
      backgroundPosition: "0 100%",
      backgroundRepeat: "repeat-x",
      backgroundSize: "10px 2px",
      transition: "background-size .2s",
      textDecoration: `none`,
      "&:hover": {
        backgroundSize: "10px 26px",
        color: "heading",
        textDecoration: `none`,
      },
    },
  },
  links: {
    nav: {
      background: "none",
      textDecoration: `none`,
      ":hover": {
        textDecoration: "underline",
      },
    },
    secondary: {
      background: "none",
    },
    social: {
      margin: 3,
      svg: {
        fill: "heading",
        width: "48px",
        height: "48px",
        "&:hover": {
          fill: tailwind.colors.yellow[5],
        },
      },
    },
  },
})

export default theme
