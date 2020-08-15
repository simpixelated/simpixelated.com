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
          {nav.map(item => (
            <TLink
              key={item.slug}
              as={Link}
              activeClassName="active"
              variant="nav"
              to={replaceSlashes(`/${basePath}/${item.slug}`)}
            >
              {item.title}
            </TLink>
          ))}
        </nav>
      )}
    </React.Fragment>
  )
}

export default Navigation
