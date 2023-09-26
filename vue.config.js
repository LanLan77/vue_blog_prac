module.exports = {
  runtimeCompiler: true,
  // 其他配置...
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].template = './index.html'; // 实际的相对路径
      return args;
    });
  },
};
