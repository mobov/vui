const merge = require('webpack-merge')
const prod = require('./production')
const env = {
  NODE_ENV: 'development'
}

module.exports = merge(prod, env)
