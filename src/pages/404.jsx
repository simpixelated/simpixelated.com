import * as React from "react"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import { Text } from "theme-ui"

const NotFound = () => {
  return (
    <Layout>
      <Text sx={{ fontSize: [4, 5, 6], fontWeight: `bold`, color: `heading` }}>
        Oops! Something went wrong.{" "}
        <span role="img" aria-label="confused face">
          😕
        </span>
      </Text>
      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <p>
          Try going <a href="/">home</a> and starting over.
        </p>
      </section>
    </Layout>
  )
}

export default NotFound
