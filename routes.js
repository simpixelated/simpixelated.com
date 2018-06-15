const routes = module.exports = require('next-routes')()

routes
    .add('/:slug', 'post');
