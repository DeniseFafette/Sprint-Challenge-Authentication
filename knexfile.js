module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: { filename: './database/auth.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    pool: {
      afterCreate:(conn, done) => {
          conn.run('PRAGMA foreign_keys = ON', done);
      }
  },
    seeds: { directory: './database/seeds' },
  },

  // testing: {
  //   client: 'sqlite3',
  //   useNullAsDefault: true,
  //   connection: { filename: './data/test.db3' },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: './database/migrations',
  //     tableName: 'dbmigrations',
  //   },
  //   pool: {
  //     afterCreate:(conn, done) => {
  //         conn.run('PRAGMA foreign_keys = ON', done);
  //     }
  // },
  //   seeds: { directory: './database/seeds' },
  // },
};

