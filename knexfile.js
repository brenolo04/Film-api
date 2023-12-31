const path = require('path')

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'src', 'Database', 'database.db')
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'Database', 'knex', 'Migrations')
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreing-key = ON', cb)
    },
    useNullAsDefault: true
  },
};
