import { gql } from "@apollo/client";

const GET_ALL_FRISEURE = gql`
  query Query {
    friseure {
      _id
      name
      adresse {
        strasse
        plz
        stadt
      }
      bildURL
      oeffnungszeiten {
        sonntag {
          von
          bis
        }
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
          sonntag
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
