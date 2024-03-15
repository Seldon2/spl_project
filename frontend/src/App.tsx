import React from "react";
import Login from "./Login";
import { useQuery } from "@apollo/client";
import { GET_ALL_FRISEURE } from "./queries";

const App = () => {
  const { loading, error, data } = useQuery(GET_ALL_FRISEURE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <div className="h-34 w-17 bg-red-400">
      <h1>App</h1>
      <Login />
    </div>
  );
};

export default App;
