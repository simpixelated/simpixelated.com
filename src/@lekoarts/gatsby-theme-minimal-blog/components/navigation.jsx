/** @jsx jsx */
import React from "react"
import { jsx, Link as TLink } from "theme-ui"
import { Link } from "gatsby"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"

const Navigation = ({ nav }) => {
  const { basePath } = useMinimalBlogConfig()

  return (
    <React.Fragment>
      {nav && nav.length > 0 && (
        <nav
          sx={{
            a: { mr: 4 },
            fontSize: [1, `18px`],
            ".active": { color: `heading` },
          }}
        >
          <TLink
            as={Link}
            activeClassName="active"
            variant="nav"
            to={replaceSlashes(`/${basePath}/blog/`)}
          >
            Blog
          </TLink>
          <TLink
            activeClassName="active"
            variant="nav"
            href="/resume-jordan-kohl.pdf"
            download
          >
            Resume
          </TLink>
        </nav>
      )}
    </React.Fragment>
  )
}

export default Navigation
