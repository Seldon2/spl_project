import { gql } from "@apollo/client";

const BOOK_APPOINTMENT = gql`
    mutation bookAppointment($input: BookAppointmentInput!) {
        bookAppointment(input: $input) {
            friseurdId
            datum
            uhrzeit
            vorname
            nachname
        }
    }

    input BookAppointmentInput {
        friseurId: ID!
        datum: String!
        uhrzeit: String!
        vorname: String!
        nachname: String!
    }
`;

export {BOOK_APPOINTMENT};