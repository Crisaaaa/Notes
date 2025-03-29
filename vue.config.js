const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
   devServer: {
    allowedHosts: ['a84e-2a02-a464-4988-0-1d67-967b-4148-48a5.ngrok-free.app']
  }
})
