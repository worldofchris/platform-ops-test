const {Resource, init_model} = require('./models/resource');

const seed_data = [
  {type: "freezer",
   name: "Big Fridge"},
  {type: "oven",
   name: "HotThing 4000"},
  {type: "knife",
   name: "Sharpie"}
];

async function seed_database(sequelize, populate) {
    try {
      init_model(sequelize)
      await sequelize.sync();
      console.log("All models were synchronized successfully.");

      if (populate === true) {
        for (var i = 0; i < seed_data.length; i++) {
          const slo = await Resource.create(seed_data[i])
          console.log(slo.id);
        }

      }
    } catch (e) {
        // Deal with the fact the chain failed
      console.log(e)
    }
}

module.exports = { seed_database };
