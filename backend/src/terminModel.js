// friseurModel.js
const mongoose = require("mongoose");


const TerminSchema = new mongoose.Schema({
  datum: String,
  vorname: String,
  nachname: String,
  zeitpunkt: String,
  friseurId: String,
});

const TerminModel = mongoose.model("Termin", TerminSchema, "Termine"); // "Friseure" ist der Name der Collection

module.exports = TerminModel;
