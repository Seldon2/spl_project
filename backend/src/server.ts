const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/schema.js");
const resolvers = require("./graphql/resolvers.js");
const cors = require("cors");

require("dotenv").config();

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  app.use(cors());

  server.applyMiddleware({ app });

  const username = process.env.MONGODB_USERNAME || "";
  const password = process.env.MONGODB_PASSWORD || "";

  await mongoose.connect(
    `mongodb://${encodeURIComponent(username)}:${encodeURIComponent(
      password
    )}@${process.env.MONGODB_IP}:${
      process.env.MONGODB_PORT
    }/?authMechanism=DEFAULT`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  app.listen(4000, () => {
    console.log("Server listening on Port 4000");
  });
}

startServer().catch((error) => console.error("Error starting server:", error));
