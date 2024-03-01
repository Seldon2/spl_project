import React from "react";
import { BsScissors } from "react-icons/bs";
import { GiBeard } from "react-icons/gi";

interface TileProps {
  name: String;
  address: String;
  telephoneNum: String;
  email: String;
}

const Tile: React.FC<TileProps> = ({ name, address, telephoneNum, email }) => {
  return (
    <div className="flex justify-between border-2 w-1/2 bg-white px-4 rounded-2xl">
      <img
        src="images/Haarzauber.jpg"
        alt="Friseur Logo"
        className="h-32 w-32 rounded-2xl object-cover my-auto"
      />
      <div className="flex-1 mx-2">
        <h1 className="font-bold">{name} Friseur</h1>
        <h2>{address}</h2>
        <h2>{telephoneNum}</h2>
        <h2>{email}</h2>
        <div className="flex">
          <div className="bg-gray-200 h-auto w-max py-0.5 px-1 rounded-md mx-1">
            €30 - €40
          </div>
          <div className="bg-gray-200 h-auto w-max py-0.5 px-1 rounded-md mx-1">
            <BsScissors />
          </div>
          <div className="bg-gray-200 h-auto w-max py-0.5 px-1 rounded-md mx-1">
            <GiBeard />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Mehr Anzeigen
        </button>
      </div>
    </div>
  );
};

export default Tile;
