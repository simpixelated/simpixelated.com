/** @jsx jsx */
import { jsx } from "theme-ui"
import { Avatar, Link, Flex } from "@theme-ui/components"
import TwitterIcon from "./assets/twitter.svg"
import FlickrIcon from "./assets/flickr.svg"
import GitHubIcon from "./assets/github.svg"
import LinkedInIcon from "./assets/linkedin.svg"

export const SocialLinks = () => {
  return (
    <Flex>
      <Link variant="social" href="https://twitter.com/simpixelated">
        <TwitterIcon />
      </Link>
      <Link variant="social" href="https://github.com/simpixelated">
        <GitHubIcon />
      </Link>
      <Link variant="social" href="https://linkedin.com/in/jordankohl">
        <LinkedInIcon />
      </Link>
      <Link variant="social" href="https://flickr.com/people/38375540@N08/">
        <FlickrIcon />
      </Link>
    </Flex>
  )
}

export default SocialLinks
