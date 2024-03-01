// friseurResolver.js
const FriseurModel = require("./friseurModel");

const resolvers = {
  Query: {
    getFriseur: async (_, { id }) => {
      try {
        const friseur = await FriseurModel.findById(id);
        return friseur;
      } catch (error) {
        console.error("Error fetching Friseur:", error);
        throw error;
      }
    },
    getAllFriseure: async () => {
      try {
        const friseure = await FriseurModel.find();
        return friseure;
      } catch (error) {
        console.error("Error fetching Friseure:", error);
        throw error;
      }
    },
  },
};

module.exports = resolvers;
