module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
          ? '/vueEventTest/'
          : '/',
    outputDir: 'docs'
  }