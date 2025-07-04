module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/services',
            handler: 'service.find',
        },
        {
            method: 'GET',
            path: '/services/featured',
            handler: 'service.findFeatured',
        },
        {
            method: 'GET',
            path: '/services/slug/:slug',
            handler: 'service.findBySlug',
        },
        {
            method: 'GET',
            path: '/services/tag/:tag',
            handler: 'service.findByTag',
        }
    ]
};