const knex = require('knex');
const configuration = require('../../knexfile');

// on this line below we choose configuration.development beacause we're using sqlite3 database
const connection = knex(configuration.development);

module.exports = connection;

