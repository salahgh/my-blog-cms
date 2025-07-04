module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/articles',
            handler: 'article.find',
        },
        {
            method: 'GET',
            path: '/articles/slug/:id',
            handler: 'article.findOne',
        },
        {
            method: 'GET',
            path: '/articles/category/:categorySlug',
            handler: 'article.findByCategory',
        },
        {
            method: 'GET',
            path: '/articles/featured',
            handler: 'article.findFeatured',
        }
    ]
};