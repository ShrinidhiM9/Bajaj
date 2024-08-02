import React, { useState } from 'react';
import axios from 'axios';
import TextInput from './TextInput';
import Dropdown from './Dropdown';
import Response from './Response';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const jsonInput = JSON.parse(inputValue);
      const response = await axios.post('https://your-backend-api.com/api/endpoint', jsonInput);
      setResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelect = (option) => {
    setSelectedOptions((prevOptions) => [...prevOptions, option]);
  };

  const handleDeselect = (option) => {
    setSelectedOptions((prevOptions) => prevOptions.filter((o) => o !== option));
  };

  return (
    <div>
      <h1>{process.env.REACT_APP_ROLL_NUMBER}</h1>
      <form onSubmit={handleSubmit}>
        <TextInput value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <Dropdown
            options={['Alphabets', 'Numbers', 'Highest alphabet']}
            selectedOptions={selectedOptions}
            onSelect={handleSelect}
            onDeselect={handleDeselect}
          />
          <Response response={response} selectedOptions={selectedOptions} />
        </div>
      )}
    </div>
  );
}

export default App;
