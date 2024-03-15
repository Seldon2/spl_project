import React from "react";
import TileList from "../components/TileList";
import { IBarber } from "../types";

interface ListingPageProps {
  barbers: IBarber[];
}

const ListingPage: React.FC<ListingPageProps> = ({ barbers }) => {
  return <TileList barbers={barbers} />;
};

export default ListingPage;
