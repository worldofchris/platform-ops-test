const {Resource, init_model} = require('./models/Resource');
const { Sequelize } = require('sequelize');

const get_resources = async (req, res) => {

  const connect_string = process.env.DB_CONNECT_STRING
  const sequelize = new Sequelize(connect_string)

  init_model(sequelize)

  res.type('application/json');
  const resources = await Resource.findAll();
  console.log(resources)
  // let slo_render = []
  // for(var i=0; i < slo.length; i++) {
  //   slo_render.push(slo[i].render());
  // }

  res.send(resources);

}

module.exports = { get_resources }



