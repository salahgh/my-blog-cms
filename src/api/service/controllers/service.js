'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::service.service', ({ strapi }) => ({
    // Get published services
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::service.service', {
            ...query,
            filters: {
                ...query.filters,
                publishedAt: { $notNull: true }
            },
            sort: { order: 'asc', createdAt: 'desc' }
        });

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    },

    // Get a single published service by slug
    async findBySlug(ctx) {
        const { slug } = ctx.params;
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::service.service', {
            ...query,
            filters: {
                slug: slug,
                publishedAt: { $notNull: true }
            }
        });

        if (!entity || entity.length === 0) {
            return ctx.notFound('Service not found');
        }

        const sanitizedEntity = await this.sanitizeOutput(entity[0], ctx);
        return this.transformResponse(sanitizedEntity);
    },

    // Get featured services
    async findFeatured(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::service.service', {
            ...query,
            filters: {
                ...query.filters,
                featured: true,
                publishedAt: { $notNull: true }
            },
            sort: { order: 'asc', createdAt: 'desc' }
        });

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    },

    // Get services by tag
    async findByTag(ctx) {
        const { tag } = ctx.params;
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::service.service', {
            ...query,
            filters: {
                tags: {
                    $contains: tag
                },
                publishedAt: { $notNull: true }
            },
            sort: { order: 'asc', createdAt: 'desc' }
        });

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    }
}));