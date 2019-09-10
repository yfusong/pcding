
const path = require('path')

// eslint-disable-next-line no-unused-vars

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}
module.exports = {
  css: {
    sourceMap: true,
  },
  productionSourceMap: false,
  assetsDir: 'static',
  publicPath: './',
  devServer: {
    host: 'dingui.szlcsc.com',
    port: 8082,
    open: false,
    public: 'dingui.szlcsc.com',
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== 'production') {
      config.devtool = 'source-map';
    }
  },
};

