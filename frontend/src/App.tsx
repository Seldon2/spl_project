import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_FRISEURE } from "./queries";
import  InputBox  from './components/InputBox';

const App = () => {
  const [outputData, setOutputData] = useState(null);

  const handleInputSubmit = async (inputData: any) => {
    try {
      const response = await fetch('YOUR_BACKEND_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputData }),
      });

      if (!response.ok) {
        throw new Error('Failed to process data');
      }

      const jsonData = await response.json();
      setOutputData(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <InputBox onInputSubmit={handleInputSubmit} />
      {outputData && (
        <pre className="mt-4 p-4 bg-gray-200 rounded-md">
          {JSON.stringify(outputData, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default App;