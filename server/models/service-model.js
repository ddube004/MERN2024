const { Schema, model } = require("mongoose");

//create schema
const serviceSchema = new Schema({
  services: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  provider: { type: String, required: true },
});

//create model

const Service = new model("Service", serviceSchema);

module.exports = Service;
