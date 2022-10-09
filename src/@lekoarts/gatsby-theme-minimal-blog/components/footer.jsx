/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import config from "../../../../package.json"

const Footer = () => {
  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        <Link
          aria-label="Link to the license"
          href="https://github.com/simpixelated/simpixelated.com/blob/stable/LICENSE.md"
        >
          &copy; {new Date().getFullYear()} by Jordan Kohl. All rights reserved.
        </Link>{" "}
        Made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        in the PNW.
      </div>
      <Link
        aria-label="Link to the changelog"
        href="https://github.com/simpixelated/simpixelated.com/blob/stable/CHANGELOG.md"
      >
        v{config.version}
      </Link>
    </footer>
  )
}

export default Footer
