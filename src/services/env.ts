const { join } = require('path')

const env = require('dotenv-safe').config({
  allowEmptyValues: true,
  example: join(__dirname, '..', '..', '.env.example'),
  path: join(__dirname, '..', '..', '.env')
})

module.exports = env
