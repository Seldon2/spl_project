export interface IBarber {
  name: String;
  adresse: {
    strasse: String;
    plz: String;
    stadt: String;
  };
  kontakt: {
    telefon: String;
    email: String;
  };
  oeffnungszeiten: {
    montag: {
      von: string;
      bis: string;
    };
    dienstag: {
      von: string;
      bis: string;
    };
    mittwoch: {
      von: string;
      bis: string;
    };
    donnerstag: {
      von: string;
      bis: string;
    };
    freitag: {
      von: string;
      bis: string;
    };
    samstag: {
      von: string;
      bis: string;
    };
  };
  angeboteneDienstleistungen: String[];
  mitarbeiter: {
    name: String;
    spezialgebiet: String;
    verfuegbarkeit: {
      montag: Boolean;
      dienstag: Boolean;
      mittwoch: Boolean;
      donnerstag: Boolean;
      freitag: Boolean;
      samstag: Boolean;
      sonntag: Boolean;
    };
  };
}
