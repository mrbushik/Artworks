import React from 'react';

function SelectedRadio({ categories, onChange, value }) {
  const handleChange = ({ target }) => {
    onChange({ value: target.value });
  };
  return (
    <div className="radio-select">
      {categories.map((item) => (
        <div>
          <input
            type="radio"
            name={item}
            id={item}
            checked={item === value}
            value={item}
            onChange={handleChange}
          />
          <label>{item}</label>
        </div>
      ))}
    </div>
  );
}

export default SelectedRadio;
