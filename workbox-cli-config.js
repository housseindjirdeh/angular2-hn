module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{js,png,svg,html,json}'],
  swDest: 'dist/service-worker.js',
  globIgnores: ['**/service-worker.js'],
  navigateFallback: '/index.html',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/node-hnapi.herokuapp.com\/.*/,
      handler: 'networkFirst'
    }
  ]
};
