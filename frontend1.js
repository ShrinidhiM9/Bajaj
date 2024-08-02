import React, { useState } from 'eact';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState({});
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: JSON.parse(input) }),
      });
      const responseData = await response.json();
      setResponse(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOptionChange = (option) => {
    const newSelectedOptions = [...selectedOptions];
    if (newSelectedOptions.includes(option)) {
      newSelectedOptions.splice(newSelectedOptions.indexOf(option), 1);
    } else {
      newSelectedOptions.push(option);
    }
    setSelectedOptions(newSelectedOptions);
  };

  const filteredResponse = () => {
    if (!response) return {};
    const filteredData = {};
    selectedOptions.forEach((option) => {
      if (option === 'Alphabets') {
        filteredData.alphabets = response.alphabets;
      } else if (option === 'Numbers') {
        filteredData.numbers = response.numbers;
      } else if (option === 'Highest alphabet') {
        filteredData.highestAlphabet = response.highestAlphabet;
      }
    });
    return filteredData;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Enter JSON input"
        />
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h2>Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
          <h2>Select options</h2>
          <div>
            <input
              type="checkbox"
              value="Alphabets"
              onChange={() => handleOptionChange('Alphabets')}
            />
            <label>Alphabets</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="Numbers"
              onChange={() => handleOptionChange('Numbers')}
            />
            <label>Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="Highest alphabet"
              onChange={() => handleOptionChange('Highest alphabet')}
            />
            <label>Highest alphabet</label>
          </div>
          <h2>Filtered response</h2>
          <pre>{JSON.stringify(filteredResponse(), null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
