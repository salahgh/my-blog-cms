export default {
  routes: [
    {
      method: 'GET',
      path: '/articles/findByTitle/:title',
      handler: 'article.findByTitle',
      config: {
        auth: false, // This makes it public
      }
    }
  ]
};