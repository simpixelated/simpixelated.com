/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import FourOhFour from "../texts/404"

const NotFound = () => {
  return (
    <Layout>
      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <FourOhFour />
      </section>
    </Layout>
  )
}

export default NotFound
