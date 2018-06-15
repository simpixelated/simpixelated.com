import Markdown from 'markdown-to-jsx';
import Layout from '../components/Layout';

const Post = ({ post }) => (
    <Layout title={post.title}>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <Markdown>{post.body}</Markdown>
    </Layout>
);

Post.getInitialProps = async ({ query }) => {
    const res = await fetch(`http://localhost:3000/api/posts/${query.slug}`);
    const post = await res.json();
    return { post };
}

export default Post;
