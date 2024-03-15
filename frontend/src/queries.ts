import { gql } from "@apollo/client";

const GET_ALL_FRISEURE = gql`
  query GetAllFriseure {
    getAllFriseure {
      _id
      name
      adresse {
        strasse
        plz
        stadt
      }
      kontakt {
        telefon
        email
      }
      oeffnungszeiten {
        montag {
          von
          bis
        }
        dienstag {
          von
          bis
        }
        mittwoch {
          von
          bis
        }
        donnerstag {
          von
          bis
        }
        freitag {
          von
          bis
        }
        samstag {
          von
          bis
        }
      }
      angeboteneDienstleistungen
      mitarbeiter {
        name
        spezialgebiet
        verfuegbarkeit {
          montag
          dienstag
          mittwoch
          donnerstag
          freitag
          samstag
        }
      }
    }
  }
`;

export { GET_ALL_FRISEURE };
