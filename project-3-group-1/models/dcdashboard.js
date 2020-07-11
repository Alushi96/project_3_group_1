
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const dcdashboardSchema = new Schema({
    helthproblems: { type: String},
    medications: { type: String},
    directives: {type: String},
    patientsearch: {type: String},
    history: {type: String},
  });
  
  const Dcdashboard = mongoose.model("Dcdashboard", dcdashboardSchema);
  
  module.exports = Dcdashboard;