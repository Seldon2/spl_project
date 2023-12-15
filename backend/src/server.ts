import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = `mongodb://${process.env.MONGODB_USERNAME}:Admin123!@10.115.3.31:27017/?authMechanism=DEFAULT`;

mongoose.connect(mongoURI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const app = express();
app.use(cors());

const typeDefs = gql`
  // Your GraphQL schema here
`;

const resolvers = {
  // Your GraphQL resolvers here
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app: app as any });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/graphql`);
});
