import React, { useState } from 'react';

const InputBox = ({ onInputSubmit }) => {
  const [inputData, setInputData] = useState('');

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = () => {
    onInputSubmit(inputData);
    setInputData(''); // Clear input after submission
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <input
        type="text"
        value={inputData}
        onChange={handleChange}
        placeholder="Type your data here"
        className="p-2 border border-gray-300 rounded-md mr-2 w-120 h-12"
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Submit
      </button>
    </div>
  );
};

export default InputBox;