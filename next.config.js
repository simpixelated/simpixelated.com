require('isomorphic-fetch');
module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });
        // Important: return the modified config
        return config
    },
    async exportPathMap () {
        const res = await fetch('http://localhost:3000/api/posts')
        const posts = await res.json();
        // tranform the list of posts into a map of pages with the pathname `/:slug`
        const pages = posts.reduce(
            (pages, post) =>
                Object.assign({}, pages, {
                    [`/post/${post.slug}`]: {
                    page: '/post',
                }
            }),
            {},
        )

        // combine the map of post pages with the home
        return Object.assign({}, pages, {
          '/': { page: '/' }
        });
    },
};
