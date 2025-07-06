/**
 * article controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::article.article', ({ strapi }) => ({
  // Get published article by title
  async findByTitle(ctx) {
      console.log(ctx)
    const { title } = ctx.params;
    const { query } = ctx;

      console.log(ctx.params)

    const entity = await strapi.entityService.findMany('api::article.article', {
      ...query,
      filters: {
        title: title,
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
  }
}));
