import React from 'react';

const Response = ({ response, selectedOptions }) => {
  if (!response) return null;

  const filteredResponse = {};
  selectedOptions.forEach((option) => {
    if (option === 'Alphabets') {
      filteredResponse.alphabets = response.alphabets;
    } else if (option === 'Numbers') {
      filteredResponse.numbers = response.numbers;
    } else if (option === 'Highest alphabet') {
      filteredResponse.highestAlphabet = response.alphabets.sort((a, b) => b.localeCompare(a))[0];
    }
  });

  return (
    <div>
      <h2>Response</h2>
      <pre>{JSON.stringify(filteredResponse, null, 2)}</pre>
    </div>
  );
};

export default Response;
