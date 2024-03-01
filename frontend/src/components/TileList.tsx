import React from "react";
import Tile from "../components/Tile";

interface TileListProps {
  tiles: {
    name: String;
    address: String;
    telephoneNum: String;
    email: String;
  }[];
}

const TileList: React.FC<TileListProps> = ({ tiles }) => {
  return (
    <div>
      {tiles.map((tile, idx) => (
        <Tile
          key={idx}
          address={tile.address}
          name={tile.name}
          telephoneNum={tile.telephoneNum}
          email={tile.email}
        />
      ))}
    </div>
  );
};

export default TileList;
