import React from 'react';

const Dropdown = ({ options, selectedOptions, onSelect, onDeselect }) => {
  return (
    <select multiple>
      {options.map((option) => (
        <option key={option} value={option} selected={selectedOptions.includes(option)}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
