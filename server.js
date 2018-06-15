// server.js
const next = require('next');
const favicon = require('serve-favicon');
const path = require('path')
const routes = require('./routes');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

const { parse } = require('url');
const postsRepo = require('./posts-repo');

// With express
const express = require('express');
app.prepare().then(() => {
    const app = express();
    app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')));
    app.get('/api/posts', async (req, res) => {
        const posts = await postsRepo.fetch();
        res.json(posts);
    });
    app.get('/api/posts/:slug', async (req, res) => {
        const post = await postsRepo.fetchBySlug(req.params.slug);
        res.json(post);
    });
    app.use(handler);
    app.listen(3000);
});
