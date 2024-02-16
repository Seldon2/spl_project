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

const OeffnungszeitenSchema = new mongoose.Schema({
  sonntag: {
    von: String,
    bis: String,
  },
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
  oeffnungszeiten: OeffnungszeitenSchema,
  angeboteneDienstleistungen: [String],
  mitarbeiter: [MitarbeiterSchema],
});

const Friseur = mongoose.model("Friseur", FriseurSchema);

module.exports = Friseur;
