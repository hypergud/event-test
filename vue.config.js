module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
          ? '/event-test/'
          : '/',
    outputDir: 'docs'
  }