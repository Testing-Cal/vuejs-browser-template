const { defineConfig } = require('@vue/cli-service')


const context_path = process.env.VUE_APP_CONTEXT_PATH || '/';
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: context_path,
})
