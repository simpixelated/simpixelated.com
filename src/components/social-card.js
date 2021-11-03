import React from "react"
import { unstable_createPortal } from "react-dom"
import { Box, Flex, Heading, Image, Paragraph, useColorMode } from "theme-ui"

const SocialCard = ({
  pageContext: { title, timeToRead, date, height, width, slug },
}) => {
  const wrapperStyles = {
    padding: "40px",
    border: "1px solid #bebbae6b",
    borderRadius: "16px",
    margin: 20,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: "flex-end",
  }
  const avatarStyles = {
    width: 150,
    height: 150,
    borderRadius: 150,
    border: "2px solid #718096",
    mr: 30,
    mt: 20,
    minWidth: "auto",
  }
  const backgroundStyles = {
    backgroundImage:
      "linear-gradient(0deg, rgba(26,32,44,1) 0%, rgba(26,32,44,0.7544059860272234) 72%, rgba(26,32,44,0.6871790952709209) 100%), url(/banner.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    filter: "blur(4px)",
    height: "100%",
    width: "100%",
  }
  const pStyles = {
    color: `secondary`,
    mt: 3,
    fontSize: [3],
    textShadow: "0px 1px 0px black",
  }
  const [, setColorMode] = useColorMode()
  setColorMode("dark")
  return (
    <Box sx={{ width, height, position: "relative" }}>
      <Box sx={backgroundStyles} />
      <Flex sx={wrapperStyles}>
        <Flex>
          <Image src="/profile-drawn.png" sx={avatarStyles} />
          <Box>
            <Heading
              as="h1"
              variant="styles.h1"
              sx={{ mt: 0, textShadow: "1px 1px 1px #000" }}
            >
              {title}
            </Heading>
            <Paragraph sx={pStyles}>
              <time>{date}</time>
              {timeToRead && ` — `}
              {timeToRead && <span>{timeToRead} min read</span>}
            </Paragraph>
            <Paragraph sx={pStyles}>simpixelated.com{slug}</Paragraph>
            <Paragraph sx={{ ...pStyles, fontSize: [5] }}>
              @simpixelated
            </Paragraph>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default SocialCard
