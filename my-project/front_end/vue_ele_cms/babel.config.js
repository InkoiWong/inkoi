module.exports = {
  presets: ['@vue/app'],

  plugins: [
    // 按需引入echarts，使用babel-plugin-equire
    'equire',

    // 按需引入element-ui，使用babel-plugin-component
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: '~theme'
      }
    ]
  ]
};
