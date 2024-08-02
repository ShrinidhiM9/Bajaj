import React from 'react';

const TextInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter JSON input"
    />
  );
};

export default TextInput;
