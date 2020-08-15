/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import { version } from "../../../../package.json"

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
          href="https://github.com/simpixelated/simpixelated.com/blob/stable/README.md#license"
        >
          &copy; {new Date().getFullYear()} by Jordan Kohl. All rights reserved.
        </Link>{" "}
        Made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        in San Diego.
      </div>
      <Link
        aria-label="Link to the changelog"
        href="https://github.com/simpixelated/simpixelated.com/blob/stable/CHANGELOG.md"
      >
        v{version}
      </Link>
    </footer>
  )
}

export default Footer
