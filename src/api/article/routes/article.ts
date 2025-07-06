/**
 * article router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::article.article', {
  config: {
    findByTitle: {
      auth: false, // Make it publicly accessible
    }
  }
});
