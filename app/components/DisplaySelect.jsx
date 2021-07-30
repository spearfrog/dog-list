import React from 'react';

export const DisplaySelect = ({ options, selected, onChange }) => {
  console.log(selected);
  return (
    <select value={selected} onChange={(event) => onChange(event.target.value)}>
      {options && options.map((option) => {
        selected === option && console.log(selected === option);
        return (
          <option 
            key={option}
            value={option}
          >
            {option}
          </option>
        );
      })}
    </select>
  );
};
