module.exports = {
    documentation: {
        enabled: true,
        config: {
            openapi: '3.0.0',
            info: {
                version: '1.0.0',
                title: 'My Blog API',
                description: 'API documentation for my Strapi blog',
                contact: {
                    name: 'API Support',
                    email: 'support@myblog.com'
                }
            },
            servers: [
                {
                    url: 'http://localhost:1337/api',
                    description: 'Development server',
                }
            ],
            // // Custom paths for both Article and Service routes
            // paths: {
            //     // Article custom routes
            //     '/articles/slug/{slug}': {
            //         get: {
            //             tags: ['Article'],
            //             summary: 'Get article by slug',
            //             description: 'Retrieve a single published article by its slug',
            //             parameters: [
            //                 {
            //                     name: 'slug',
            //                     in: 'path',
            //                     required: true,
            //                     schema: {
            //                         type: 'string'
            //                     },
            //                     description: 'Article slug',
            //                     example: 'building-modern-web-applications-strapi'
            //                 }
            //             ],
            //             responses: {
            //                 200: {
            //                     description: 'Article found',
            //                     content: {
            //                         'application/json': {
            //                             schema: {
            //                                 type: 'object',
            //                                 properties: {
            //                                     data: {
            //                                         $ref: '#/components/schemas/Article'
            //                                     }
            //                                 }
            //                             }
            //                         }
            //                     }
            //                 },
            //                 404: {
            //                     description: 'Article not found'
            //                 }
            //             }
            //         }
            //     },
            //     '/articles/category/{categorySlug}': {
            //         get: {
            //             tags: ['Article'],
            //             summary: 'Get articles by category',
            //             description: 'Retrieve all published articles in a specific category',
            //             parameters: [
            //                 {
            //                     name: 'categorySlug',
            //                     in: 'path',
            //                     required: true,
            //                     schema: {
            //                         type: 'string'
            //                     },
            //                     description: 'Category slug',
            //                     example: 'technology'
            //                 },
            //                 {
            //                     name: 'page',
            //                     in: 'query',
            //                     schema: {
            //                         type: 'integer',
            //                         minimum: 1,
            //                         default: 1
            //                     },
            //                     description: 'Page number'
            //                 },
            //                 {
            //                     name: 'pageSize',
            //                     in: 'query',
            //                     schema: {
            //                         type: 'integer',
            //                         minimum: 1,
            //                         maximum: 100,
            //                         default: 25
            //                     },
            //                     description: 'Number of articles per page'
            //                 }
            //             ],
            //             responses: {
            //                 200: {
            //                     description: 'Articles found',
            //                     content: {
            //                         'application/json': {
            //                             schema: {
            //                                 type: 'object',
            //                                 properties: {
            //                                     data: {
            //                                         type: 'array',
            //                                         items: {
            //                                             $ref: '#/components/schemas/Article'
            //                                         }
            //                                     },
            //                                     meta: {
            //                                         type: 'object',
            //                                         properties: {
            //                                             pagination: {
            //                                                 type: 'object',
            //                                                 properties: {
            //                                                     page: { type: 'integer' },
            //                                                     pageSize: { type: 'integer' },
            //                                                     pageCount: { type: 'integer' },
            //                                                     total: { type: 'integer' }
            //                                                 }
            //                                             }
            //                                         }
            //                                     }
            //                                 }
            //                             }
            //                         }
            //                     }
            //                 }
            //             }
            //         }
            //     },
            //     '/articles/featured': {
            //         get: {
            //             tags: ['Article'],
            //             summary: 'Get featured articles',
            //             description: 'Retrieve all featured articles',
            //             parameters: [
            //                 {
            //                     name: 'page',
            //                     in: 'query',
            //                     schema: {
            //                         type: 'integer',
            //                         minimum: 1,
            //                         default: 1
            //                     }
            //                 },
            //                 {
            //                     name: 'pageSize',
            //                     in: 'query',
            //                     schema: {
            //                         type: 'integer',
            //                         minimum: 1,
            //                         maximum: 100,
            //                         default: 25
            //                     }
            //                 }
            //             ],
            //             responses: {
            //                 200: {
            //                     description: 'Featured articles',
            //                     content: {
            //                         'application/json': {
            //                             schema: {
            //                                 type: 'object',
            //                                 properties: {
            //                                     data: {
            //                                         type: 'array',
            //                                         items: {
            //                                             $ref: '#/components/schemas/Article'
            //                                         }
            //                                     }
            //                                 }
            //                             }
            //                         }
            //                     }
            //                 }
            //             }
            //         }
            //     },
            //     // Service custom routes
            //     '/services': {
            //         get: {
            //             tags: ['Service'],
            //             summary: 'Get all services',
            //             description: 'Retrieve all published services',
            //             parameters: [
            //                 {
            //                     name: 'populate',
            //                     in: 'query',
            //                     schema: {
            //                         type: 'string'
            //                     },
            //                     description: 'Relations to populate'
            //                 },
            //                 {
            //                     name: 'sort',
            //                     in: 'query',
            //                     schema: {
            //                         type: 'string',
            //                         default: 'order:asc'
            //                     },
            //                     description: 'Sort order'
            //                 },
            //                 {
            //                     name: 'filters',
            //                     in: 'query',
            //                     schema: {
            //                         type: 'object'
            //                     },
            //                     description: 'Filters to apply'
            //                 },
            //                 {
            //                     name: 'pagination[page]',
            //                     in: 'query',
            //                     schema: {
            //                         type: 'integer',
            //                         minimum: 1,
            //                         default: 1
            //                     },
            //                     description: 'Page number'
            //                 },
            //                 {
            //                     name: 'pagination[pageSize]',
            //                     in: 'query',
            //                     schema: {
            //                         type: 'integer',
            //                         minimum: 1,
            //                         maximum: 100,
            //                         default: 25
            //                     },
            //                     description: 'Number of services per page'
            //                 }
            //             ],
            //             responses: {
            //                 200: {
            //                     description: 'Services retrieved successfully',
            //                     content: {
            //                         'application/json': {
            //                             schema: {
            //                                 type: 'object',
            //                                 properties: {
            //                                     data: {
            //                                         type: 'array',
            //                                         items: {
            //                                             $ref: '#/components/schemas/Service'
            //                                         }
            //                                     },
            //                                     meta: {
            //                                         type: 'object',
            //                                         properties: {
            //                                             pagination: {
            //                                                 type: 'object',
            //                                                 properties: {
            //                                                     page: { type: 'integer' },
            //                                                     pageSize: { type: 'integer' },
            //                                                     pageCount: { type: 'integer' },
            //                                                     total: { type: 'integer' }
            //                                                 }
            //                                             }
            //                                         }
            //                                     }
            //                                 }
            //                             }
            //                         }
            //                     }
            //                 }
            //             }
            //         }
            //     },
            //     '/services/featured': {
            //         get: {
            //             tags: ['Service'],
            //             summary: 'Get featured services',
            //             description: 'Retrieve all featured and published services',
            //             parameters: [
            //                 {
            //                     name: 'populate',
            //                     in: 'query',
            //                     schema: {
            //                         type: 'string'
            //                     },
            //                     description: 'Relations to populate'
            //                 },
            //                 {
            //                     name: 'sort',
            //                     in: 'query',
            //                     schema: {
            //                         type: 'string',
            //                         default: 'order:asc'
            //                     },
            //                     description: 'Sort order'
            //                 }
            //             ],
            //             responses: {
            //                 200: {
            //                     description: 'Featured services retrieved successfully',
            //                     content: {
            //                         'application/json': {
            //                             schema: {
            //                                 type: 'object',
            //                                 properties: {
            //                                     data: {
            //                                         type: 'array',
            //                                         items: {
            //                                             $ref: '#/components/schemas/Service'
            //                                         }
            //                                     }
            //                                 }
            //                             }
            //                         }
            //                     }
            //                 }
            //             }
            //         }
            //     },
            //     '/services/slug/{slug}': {
            //         get: {
            //             tags: ['Service'],
            //             summary: 'Get service by slug',
            //             description: 'Retrieve a single published service by its slug',
            //             parameters: [
            //                 {
            //                     name: 'slug',
            //                     in: 'path',
            //                     required: true,
            //                     schema: {
            //                         type: 'string'
            //                     },
            //                     description: 'Service slug',
            //                     example: 'web-development'
            //                 },
            //                 {
            //                     name: 'populate',
            //                     in: 'query',
            //                     schema: {
            //                         type: 'string'
            //                     },
            //                     description: 'Relations to populate'
            //                 }
            //             ],
            //             responses: {
            //                 200: {
            //                     description: 'Service found',
            //                     content: {
            //                         'application/json': {
            //                             schema: {
            //                                 type: 'object',
            //                                 properties: {
            //                                     data: {
            //                                         $ref: '#/components/schemas/Service'
            //                                     }
            //                                 }
            //                             }
            //                         }
            //                     }
            //                 },
            //                 404: {
            //                     description: 'Service not found'
            //                 }
            //             }
            //         }
            //     },
            //     '/services/tag/{tag}': {
            //         get: {
            //             tags: ['Service'],
            //             summary: 'Get services by tag',
            //             description: 'Retrieve all published services containing a specific tag',
            //             parameters: [
            //                 {
            //                     name: 'tag',
            //                     in: 'path',
            //                     required: true,
            //                     schema: {
            //                         type: 'string'
            //                     },
            //                     description: 'Tag to filter by',
            //                     example: 'frontend'
            //                 },
            //                 {
            //                     name: 'populate',
            //                     in: 'query',
            //                     schema: {
            //                         type: 'string'
            //                     },
            //                     description: 'Relations to populate'
            //                 },
            //                 {
            //                     name: 'sort',
            //                     in: 'query',
            //                     schema: {
            //                         type: 'string',
            //                         default: 'order:asc'
            //                     },
            //                     description: 'Sort order'
            //                 }
            //             ],
            //             responses: {
            //                 200: {
            //                     description: 'Services found',
            //                     content: {
            //                         'application/json': {
            //                             schema: {
            //                                 type: 'object',
            //                                 properties: {
            //                                     data: {
            //                                         type: 'array',
            //                                         items: {
            //                                             $ref: '#/components/schemas/Service'
            //                                         }
            //                                     }
            //                                 }
            //                             }
            //                         }
            //                     }
            //                 }
            //             }
            //         }
            //     }
            // },
            // // Components with both Article and Service schemas
            // components: {
            //     schemas: {
            //         Article: {
            //             type: 'object',
            //             properties: {
            //                 id: {
            //                     type: 'integer',
            //                     example: 1
            //                 },
            //                 title: {
            //                     type: 'string',
            //                     example: 'Building Modern Web Applications with Strapi'
            //                 },
            //                 slug: {
            //                     type: 'string',
            //                     example: 'building-modern-web-applications-strapi'
            //                 },
            //                 excerpt: {
            //                     type: 'string',
            //                     example: 'Discover how Strapi\'s headless CMS architecture enables developers...'
            //                 },
            //                 content: {
            //                     type: 'string',
            //                     example: 'Strapi has revolutionized the way developers approach content management...'
            //                 },
            //                 read_time: {
            //                     type: 'integer',
            //                     example: 8
            //                 },
            //                 publishedAt: {
            //                     type: 'string',
            //                     format: 'date-time',
            //                     example: '2024-06-15T10:00:00.000Z'
            //                 },
            //                 createdAt: {
            //                     type: 'string',
            //                     format: 'date-time'
            //                 },
            //                 updatedAt: {
            //                     type: 'string',
            //                     format: 'date-time'
            //                 },
            //                 category: {
            //                     type: 'object',
            //                     properties: {
            //                         id: { type: 'integer' },
            //                         name: { type: 'string', example: 'Technology' },
            //                         slug: { type: 'string', example: 'technology' },
            //                         color: { type: 'string', example: '#3B82F6' }
            //                     }
            //                 },
            //                 author: {
            //                     type: 'object',
            //                     properties: {
            //                         id: { type: 'integer' },
            //                         name: { type: 'string', example: 'Sarah Chen' },
            //                         email: { type: 'string', example: 'sarah@example.com' },
            //                         bio: { type: 'string' },
            //                         avatar: {
            //                             type: 'object',
            //                             properties: {
            //                                 url: { type: 'string', example: '/uploads/avatar.jpg' },
            //                                 alternativeText: { type: 'string' }
            //                             }
            //                         }
            //                     }
            //                 },
            //                 tags: {
            //                     type: 'array',
            //                     items: {
            //                         type: 'object',
            //                         properties: {
            //                             id: { type: 'integer' },
            //                             name: { type: 'string', example: 'strapi' },
            //                             slug: { type: 'string', example: 'strapi' }
            //                         }
            //                     }
            //                 },
            //                 featured_image: {
            //                     type: 'object',
            //                     properties: {
            //                         url: { type: 'string', example: '/uploads/featured-image.jpg' },
            //                         alternativeText: { type: 'string' },
            //                         width: { type: 'integer' },
            //                         height: { type: 'integer' }
            //                     }
            //                 }
            //             }
            //         },
            //         Service: {
            //             type: 'object',
            //             properties: {
            //                 id: {
            //                     type: 'integer',
            //                     example: 1
            //                 },
            //                 title: {
            //                     type: 'string',
            //                     example: 'Web Development'
            //                 },
            //                 slug: {
            //                     type: 'string',
            //                     example: 'web-development'
            //                 },
            //                 description: {
            //                     type: 'string',
            //                     example: 'Professional web development services for modern businesses'
            //                 },
            //                 tags: {
            //                     type: 'array',
            //                     items: {
            //                         type: 'string'
            //                     },
            //                     example: ['frontend', 'backend', 'fullstack']
            //                 },
            //                 gradientFrom: {
            //                     type: 'string',
            //                     pattern: '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$',
            //                     example: '#3B82F6',
            //                     description: 'Starting color for gradient (hex format)'
            //                 },
            //                 gradientTo: {
            //                     type: 'string',
            //                     pattern: '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$',
            //                     example: '#1D4ED8',
            //                     description: 'Ending color for gradient (hex format)'
            //                 },
            //                 icon: {
            //                     type: 'string',
            //                     example: 'CodeIcon',
            //                     description: 'Icon component name or identifier'
            //                 },
            //                 featured: {
            //                     type: 'boolean',
            //                     example: false
            //                 },
            //                 order: {
            //                     type: 'integer',
            //                     example: 0
            //                 },
            //                 meta_title: {
            //                     type: 'string',
            //                     example: 'Web Development Services'
            //                 },
            //                 meta_description: {
            //                     type: 'string',
            //                     example: 'Professional web development services for modern businesses'
            //                 },
            //                 publishedAt: {
            //                     type: 'string',
            //                     format: 'date-time',
            //                     example: '2024-06-15T10:00:00.000Z'
            //                 },
            //                 createdAt: {
            //                     type: 'string',
            //                     format: 'date-time'
            //                 },
            //                 updatedAt: {
            //                     type: 'string',
            //                     format: 'date-time'
            //                 }
            //             }
            //         }
            //     }
            // }
        }
    }
};