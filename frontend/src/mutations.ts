import { gql } from "@apollo/client";

const BOOK_APPOINTMENT = gql`
    mutation bookAppointment($input: BookAppointmentInput!) {
        bookAppointment(input: $input) {
            friseurdId
            datum
            uhrzeit
            vorname
            nachname
            dienstleistungen
        }
    }

    input BookAppointmentInput {
        friseurId: ID!
        datum: String!
        uhrzeit: String!
        vorname: String!
        nachname: String!
        dienstleistungen: {
            faerben: Boolean!
            styling: Boolean!
            schneiden: Boolean!
        }
    }
`;

export {BOOK_APPOINTMENT};