// friseurModel.js
const mongoose = require("mongoose");

const TerminSchema = new mongoose.Schema({
  datum: Date,
  vorname: String,
  nachname: String,
  zeitpunkt: String,
  friseurId: String,
  dienstleistungen: {
    faerben: Boolean, 
    styling: Boolean,
    schneiden: Boolean,
  }
});

const TerminModel = mongoose.model("Termin", TerminSchema, "Termine"); // "Friseure" ist der Name der Collection

module.exports = TerminModel;
