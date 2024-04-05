import React, { useState } from "react";
import { BsScissors } from "react-icons/bs";
import { GiBeard } from "react-icons/gi";
import { IoColorPalette } from "react-icons/io5";
import { BOOK_APPOINTMENT } from "../mutations";
import { useMutation } from "@apollo/client";

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
  const [showPopup, setShowPopup] = useState(false);
  const [bookingData, setBookingData] = useState({
    firstName: "",
    lastName: "",
    time: "",
    date: "",
  });

  
const [mutate, { loading, error }] = useMutation(BOOK_APPOINTMENT);

  const handleClick = () => {
    // Erstelle ein Objekt aus den Buchungsdaten
    const bookingInput = {
      friseurId: "testea", // Replace with actual hairdresser ID
      datum: bookingData.date,
      uhrzeit: bookingData.time,
      vorname: bookingData.firstName,
      nachname: bookingData.lastName,
    };
  
    mutate({ variables: { input: bookingInput } });
  };

  const hasService = (service: string) => services.includes(service);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  return (
    <div className="flex justify-evenly border-2 w-1/2 bg-white py-2 rounded-2xl relative">
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
          {hasService("Haarstyling") && (
            <div className="flex items-center justify-center bg-gray-200 h-auto w-max rounded-md p-1 -mx-2">
              <GiBeard className="text-blue-900" />
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          onClick={togglePopup}
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Buchen
        </button>
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg relative border-2 border-gray-300">
            <button
              onClick={togglePopup}
              className="absolute top-0 right-0 p-2 text-gray-500 hover:text-black focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h1 className="text-center text-xl font-semibold mb-4">{name}</h1>
            <div className="mb-4">
              <input
                type="text"
                name="firstName"
                value={bookingData.firstName}
                onChange={handleInputChange}
                placeholder="Vorname"
                className="w-full border-2 border-gray-300 rounded-md p-2 mb-2"
              />
              <input
                type="text"
                name="lastName"
                value={bookingData.lastName}
                onChange={handleInputChange}
                placeholder="Nachname"
                className="w-full border-2 border-gray-300 rounded-md p-2 mb-2"
              />
              <input
                type="text"
                name="time"
                value={bookingData.time}
                onChange={handleInputChange}
                placeholder="Zeit"
                className="w-full border-2 border-gray-300 rounded-md p-2 mb-2"
              />
              <input
                type="date"
                name="date"
                value={bookingData.date}
                onChange={handleInputChange}
                placeholder="Datum"
                className="w-full border-2 border-gray-300 rounded-md p-2 mb-2"
              />
              <div className="mb-2">Dienstleistungen:</div>
              <div>
              {hasService("Haarschnitt") && (
            <div className="flex items-center justify-center bg-gray-200 h-auto w-max rounded-md p-1">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="service"
                  value="Haarschnitt"
                  onChange={handleInputChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Haarschnitt</span>
              </label>
              <BsScissors className="text-blue-900 ml-1" />
            </div>
          )}
              {hasService("Faerben") && (
            <div className="flex items-center justify-center bg-gray-200 h-auto w-max rounded-md p-1">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="service"
                  value="Faerben"
                  onChange={handleInputChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Faerben</span>
              </label>
              <IoColorPalette className="text-blue-900 ml-1" />
            </div>
          )}
              {hasService("Haarstyling") && (
            <div className="flex items-center justify-center bg-gray-200 h-auto w-max rounded-md p-1">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="service"
                  value="Haarstyling"
                  onChange={handleInputChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Haarstyling</span>
              </label>
              <GiBeard className="text-blue-900 ml-1" />
            </div>
          )}
            </div>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg" onClick={() => handleClick()}>
              Buchen
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tile;