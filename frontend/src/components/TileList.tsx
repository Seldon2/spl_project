import React from "react";
import Tile from "../components/Tile";
import { type IBarber } from "../types";

interface TileListProps {
  barbers: IBarber[];
}

const TileList: React.FC<TileListProps> = ({ barbers }) => {
  return (
    <div>
      {barbers.map((barber, idx) => (
        <Tile
          key={idx}
          zip={barber.adresse.plz}
          city={barber.adresse.stadt}
          street={barber.adresse.strasse}
          name={barber.name}
          telephoneNum={barber.kontakt.telefon}
          email={barber.kontakt.email}
          services={barber.angeboteneDienstleistungen}
        />
      ))}
    </div>
  );
};

export default TileList;
