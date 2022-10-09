/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing"
import List from "@lekoarts/gatsby-theme-minimal-blog/src/components/list"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import Bottom from "../texts/bottom"
import SocialLinks from "../../../components/social-link"

const Homepage = ({ posts }) => {
  const { basePath, blogPath } = useMinimalBlogConfig()

  return (
    <Layout>
      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <Heading
          sx={{ fontSize: [4, 5, 6], fontWeight: `bold`, color: `heading` }}
          as="h1"
        >
          Hi, I'm Jordan!{" "}
          <span role="img" aria-label="waving hello">
            👋
          </span>
        </Heading>
        <p>
          I'm a developer currently living in the Pacific Northwest,
          specializing in JavaScript, HTML, and CSS. I currently work for{" "}
          <a href="https://segment.com">Segment</a>. I'm passionate about
          React.js, improving software development, fair compensation, and
          building an equitable space in tech. You can read some of my opinions
          below.
        </p>
        <SocialLinks />
      </section>
      <Title text="Latest Posts">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>
          See all posts
        </Link>
      </Title>
      <Listing posts={posts} showTags={false} />
      <List>
        <Bottom />
      </List>
    </Layout>
  )
}

export default Homepage
