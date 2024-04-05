const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const friseurModel = require("./friseurModel");
const friseurResolver = require("./friseurResolver");
const terminModel = require("./terminModel");
const terminResolver = require("./terminResolver");

dotenv.config();

const username = process.env.MONGODB_USERNAME || "";
const password = process.env.MONGODB_PASSWORD || "";
const dbIP = process.env.MONGODB_IP || "localhost";
const dbPort = process.env.MONGODB_PORT || "27017";
const mongoURI = `mongodb://${encodeURIComponent(
  username
)}:${encodeURIComponent(password)}@${dbIP}:${dbPort}/?authMechanism=DEFAULT`;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.MONGODB_DATABASE,
});

const typeDefs = `
  type Adresse {
    strasse: String
    plz: String
    stadt: String
  }

  type Kontakt {
    telefon: String
    email: String
  }

  type Oeffnungszeiten {
    montag: Zeiten
    dienstag: Zeiten
    mittwoch: Zeiten
    donnerstag: Zeiten
    freitag: Zeiten
    samstag: Zeiten
  }

  type Zeiten {
    von: String
    bis: String
  }

  type Mitarbeiter {
    name: String
    spezialgebiet: String
    verfuegbarkeit: Verfuegbarkeit
  }

  type Verfuegbarkeit {
    montag: Boolean
    dienstag: Boolean
    mittwoch: Boolean
    donnerstag: Boolean
    freitag: Boolean
    samstag: Boolean
  }

  type Friseur {
    _id: ID!
    name: String!
    adresse: Adresse!
    kontakt: Kontakt!
    oeffnungszeiten: Oeffnungszeiten!
    angeboteneDienstleistungen: [String]!
    mitarbeiter: [Mitarbeiter]!
  }

  type Query {
    getFriseur(id: ID!): Friseur
    getAllFriseure: [Friseur]
  }

  type Termin {
    id: ID!
    datum: String!
    vorname: String!
    nachname: String!
    zeitpunkt: String!
    friseurId: String!
  }

  type Mutation {
    bookAppointment(input: BookAppointmentInput!): Termin
  }
  
  input BookAppointmentInput {
    friseurId: ID!
    datum: String!
    zeitpunkt: String!
    vorname: String!
    nachname: String!
  }
`;

const resolvers = [
  friseurResolver,
  terminResolver,
];

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  const app = express();
  const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  };

  app.use(cors(corsOptions));

  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
  });
}

startServer().catch((error) => console.error("Error starting server:", error));
