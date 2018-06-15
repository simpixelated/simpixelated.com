import 'isomorphic-fetch'
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import Layout from '../components/Layout';

const Page = ({ posts }) => (
    <Layout>
        {posts.map(post => (
            <p key={post.slug}>
                <Link href={post.slug}>
                    <a>
                        <span className="title">{post.title}</span>
                        <span className="date">{post.date}</span>
                    </a>
                </Link>
            </p>
        ))}
    </Layout>
);

Page.getInitialProps = async ({ query }) => {
    const res = await fetch('http://localhost:3000/api/posts')
    const posts = await res.json();
    return { posts };
};

export default Page;
