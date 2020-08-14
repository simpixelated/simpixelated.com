import { merge } from "theme-ui"
import { tailwind } from "@theme-ui/presets"
import originalTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index"

const theme = merge(originalTheme, {
  initialColorModeName: "dark",
  colors: {
    modes: {
      dark: {
        text: "#cacaca",
        primary: "#599e94",
        secondary: tailwind.colors.gray[6],
        toggleIcon: tailwind.colors.gray[4],
        background: tailwind.colors.gray[9],
        heading: "#bebbae",
        divide: tailwind.colors.gray[8],
        muted: tailwind.colors.gray[8],
      },
      light: {
        background: tailwind.colors.gray[1],
        heading: tailwind.colors.gray[8],
      },
    },
  },
})

export default theme
