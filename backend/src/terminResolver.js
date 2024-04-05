// friseurResolver.js
const terminModel = require("./friseurModel");

const resolvers = {
  Mutation: {
    bookAppointment: async (_, {friseurid, vorname, nachname, datum, zeitpunkt}) => {
        try{
            const termin = await terminModel.create({
                friseurid, 
                vorname, 
                nachname, 
                datum, 
                zeitpunkt
            })
            return termin;
        }catch(error){
            console.error("Error fetching Friseur:", error);
            throw error;
        }
    }
  }
};

module.exports = resolvers;
