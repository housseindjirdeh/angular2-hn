module.exports = {
  navigateFallback: '/index.html',
  stripPrefix: 'dist',
  root: 'dist/',
  staticFileGlobs: [
    'dist/index.html',
    'dist/**.js',
    'dist/**.css',
    'dist/assets/images/**.png'
  ],
  runtimeCaching: [{
    urlPattern: /node-hnapi\.herokuapp\.com/,
    handler: 'networkFirst'
  }]
};
