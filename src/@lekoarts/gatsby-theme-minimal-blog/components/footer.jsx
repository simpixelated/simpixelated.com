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
        Made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        in San Diego. &copy; {new Date().getFullYear()} by Jordan Kohl. All
        rights reserved.
      </div>
      <Link
        aria-label="Link to the changelog"
        href="https://github.com/simpixelated/simpixelated.com/blob/stable/CHANGELOG.md"
      >
        Version {version}
      </Link>
    </footer>
  )
}

export default Footer
