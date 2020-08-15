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
      background:
        "linear-gradient(to bottom, rgba(162, 122, 22, 0.4) 90%, rgb(162, 122, 22) 100%)",
      backgroundPosition: "0 100%",
      backgroundRepeat: "repeat-x",
      backgroundSize: "10px 10px",
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
  },
})

export default theme
