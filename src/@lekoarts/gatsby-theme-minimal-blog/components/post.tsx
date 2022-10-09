import * as React from "react"
import ThemePost, {
  Head,
} from "@lekoarts/gatsby-theme-minimal-blog/src/components/post"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"

const Post = props => {
  const { basePath } = useMinimalBlogConfig()
  const socialCard = replaceSlashes(
    `/${basePath}/banners/${props.data.post.slug}-social-card.png`
  )
  // creates File object similar to what gatsby-transformer would create and what the theme expects
  // allows using the generated social cards in /static/, since these will not be processed by Gatsby
  if (props.data && !props.data.post.banner) {
    props.data.post.banner = {
      childImageSharp: { resize: { src: socialCard } },
    }
  }
  return <ThemePost {...props} />
}

export default Post
export { Head }
