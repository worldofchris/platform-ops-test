const app = require('./server.js')
const pino = require('pino');
const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

const {seed_database} = require('./seed.js');
const { Sequelize } = require('sequelize');

(async () => {
  const connect_string = process.env.DB_CONNECT_STRING
  const sequelize = new Sequelize(connect_string)
  const populate = true

  seed_database(sequelize, populate).then(() => {
    app.listen(8080, () => {
      logger.info('Server running on port %d', 8080);
    })
  })
  .catch(error => {
    console.log(error)
  })
})();

