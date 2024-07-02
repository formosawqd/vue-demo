module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 目标服务器的地址
        changeOrigin: true, // 是否改变源地址
        pathRewrite: { '^/api': '' }, // 将/api前缀重写为空
      },
    },
  },
};
