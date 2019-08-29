const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  baseUrl: './',
  productionSourceMap: false,
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      },
      '/ms': {
        target: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
        changeOrigin: true
      }
    }
  },

  configureWebpack: config => {
    // if (process.env.NODE_ENV === 'production') {
    //   return {
    //     plugins: [new BundleAnalyzerPlugin()]
    //   };
    // }

    return {
      plugins: [new BundleAnalyzerPlugin()]
    };
  }
};
