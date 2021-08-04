const express = require('express')
const YAML = require('yamljs')
const { connector } = require('swagger-routes-express')
const api = require('./api')
const cors = require('cors')
const pino = require('pino');
const expressPino = require('express-pino-logger');

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
const expressLogger = expressPino({ logger });

const makeApp = () => {
  const apiDefinition = YAML.load('./api/swagger.yaml') // load the api as json
  const connect = connector(api, apiDefinition) // make the connector
  const app = express() // make the app
  app.use(expressLogger);
  app.use(cors())

  connect(app) // attach the routes
  return app
}

const app = makeApp();
module.exports = app;