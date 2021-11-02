/** @jsx jsx */
import { jsx, useColorMode, Image } from "theme-ui"
import { Flex } from "@theme-ui/components"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import ColorModeToggle from "@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle"
import Navigation from "@lekoarts/gatsby-theme-minimal-blog/src/components/navigation"
import HeaderTitle from "@lekoarts/gatsby-theme-minimal-blog/src/components/header-title"
import imageAvatar from "./profile-drawn-transparent.png"

const Header = () => {
  const { navigation: nav } = useMinimalBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = e => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header
      sx={{
        mb: [5, 6],
        display: "flex",
        variant: `dividers.bottom`,
        pb: "0",
        overflow: "hidden",
        ":hover img": { mb: "-4px" },
        flexFlow: "wrap",
      }}
    >
      <Flex sx={{ flex: "auto", alignItems: `center` }}>
        <HeaderTitle />
      </Flex>
      <Flex
        sx={{
          alignItems: `center`,
          color: `secondary`,
          a: { color: `secondary`, ":hover": { color: `heading` } },
          minHeight: "68px",
        }}
      >
        <Image
          src={imageAvatar}
          alt="illustration of Jordan Kohl"
          width="68"
          height="68"
          sx={{
            width: "68px",
            mr: 4,
            mb: "-58px",
            transition: "all 400ms cubic-bezier(.47,1.64,.41,.8)",
            willChange: "margin-bottom",
          }}
        />
        <Navigation nav={nav} />
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex>
    </header>
  )
}

export default Header
