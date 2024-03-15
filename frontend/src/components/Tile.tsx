import React from "react";
import { BsScissors } from "react-icons/bs";
import { GiBeard } from "react-icons/gi";
import { IoColorPalette } from "react-icons/io5";

interface TileProps {
  name: String;
  zip: String;
  street: String;
  city: String;
  telephoneNum: String;
  email: String;
  services: String[];
}

const Tile: React.FC<TileProps> = ({
  name,
  zip,
  street,
  city,
  telephoneNum,
  email,
  services,
}) => {
  const hasService = (service: string) => services.includes(service);
  return (
    <div className="flex justify-evenly border-2 w-1/2 bg-white py-2 rounded-2xl">
      <img
        src={`images/${name}.jpg`}
        alt="Friseur Logo"
        className="h-32 w-48 rounded-2xl object-cover my-auto mx-2"
      />
      <div className="flex-1 mx-2">
        <h1 className="font-bold">{name}</h1>
        <h2>
          {street}, {zip} {city}
        </h2>
        <h2>{telephoneNum}</h2>
        <h2>{email}</h2>
        <div className="flex flex-row m-0 mt-1">
          {hasService("Haarschnitt") && (
            <div className="flex items-center justify-center bg-gray-200 h-auto w-max rounded-md p-1">
              <BsScissors className="text-blue-900" />
            </div>
          )}
          {hasService("Faerben") && (
            <div className="flex items-center justify-center bg-gray-200 h-auto w-max rounded-md p-1 mx-2">
              <IoColorPalette className="text-blue-900" />
            </div>
          )}
          {hasService("Bardstyling") && (
            <div className="flex items-center justify-center bg-gray-200 h-auto w-max rounded-md p-1 -mx-2">
              <GiBeard className="text-blue-900" />
            </div>
          )}
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
