const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '39.104.84.48',
    user : 'root',
    password : 'MH0703zyc1225',
    database : 'we_chat'
  },
  pool: { min: 5, max: 20 },
  poolIdleTimeout: 30000,
  debug: process.env.knex_debug = 'true',
});

module.exports = knex;