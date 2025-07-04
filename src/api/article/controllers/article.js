'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
    // Get published articles with populated relations
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::article.article', {
            ...query,
            filters: {
                ...query.filters,
                publishedAt: { $notNull: true }
            },
            populate: {
                category: true,
                tags: true,
                author: {
                    populate: ['avatar']
                },
                featured_image: true
            }
        });

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    },

    // Get single article by slug
    async findOne(ctx) {
        const { id: slug } = ctx.params;

        const entity = await strapi.entityService.findMany('api::article.article', {
            filters: {
                slug: slug,
                publishedAt: { $notNull: true }
            },
            populate: {
                category: true,
                tags: true,
                author: {
                    populate: ['avatar']
                },
                featured_image: true
            }
        });

        if (!entity || entity.length === 0) {
            return ctx.notFound('Article not found');
        }

        const sanitizedEntity = await this.sanitizeOutput(entity[0], ctx);
        return this.transformResponse(sanitizedEntity);
    },

    // Get articles by category
    async findByCategory(ctx) {
        const { categorySlug } = ctx.params;
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::article.article', {
            ...query,
            filters: {
                category: {
                    slug: categorySlug
                },
                publishedAt: { $notNull: true }
            },
            populate: {
                category: true,
                tags: true,
                author: {
                    populate: ['avatar']
                },
                featured_image: true
            }
        });

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    },

    // Get featured articles
    async findFeatured(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::article.article', {
            ...query,

            populate: {
                category: true,
                tags: true,
                author: {
                    populate: ['avatar']
                },
                featured_image: true
            }
        });

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    }
}));