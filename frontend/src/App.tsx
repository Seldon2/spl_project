import { useQuery } from "@apollo/client";
import { GET_ALL_FRISEURE } from "./queries";
import ListingPage from "./pages/ListingPage";

const App = () => {
  const { loading, error, data } = useQuery(GET_ALL_FRISEURE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data.getAllFriseure);

  return (
    <div className="bg-gray-200 h-screen">
      <ListingPage barbers={data.getAllFriseure} />
    </div>
  );
};

export default App;
