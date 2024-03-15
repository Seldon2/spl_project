// friseurModel.js
const mongoose = require("mongoose");

const MitarbeiterSchema = new mongoose.Schema({
  name: String,
  spezialgebiet: String,
  verfuegbarkeit: {
    montag: Boolean,
    dienstag: Boolean,
    mittwoch: Boolean,
    donnerstag: Boolean,
    freitag: Boolean,
    samstag: Boolean,
  },
});

const FriseurSchema = new mongoose.Schema({
  name: String,
  adresse: {
    strasse: String,
    plz: String,
    stadt: String,
  },
  kontakt: {
    telefon: String,
    email: String,
  },
  oeffnungszeiten: {
    montag: {
      von: String,
      bis: String,
    },
    dienstag: {
      von: String,
      bis: String,
    },
    mittwoch: {
      von: String,
      bis: String,
    },
    donnerstag: {
      von: String,
      bis: String,
    },
    freitag: {
      von: String,
      bis: String,
    },
    samstag: {
      von: String,
      bis: String,
    },
  },
  angeboteneDienstleistungen: [String],
  mitarbeiter: [MitarbeiterSchema],
});

const FriseurModel = mongoose.model("Friseur", FriseurSchema, "Friseure"); // "Friseure" ist der Name der Collection

module.exports = FriseurModel;
