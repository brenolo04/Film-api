const config = require('../../../knexfile')
const knex = require('knex')

knex.run(config.development)