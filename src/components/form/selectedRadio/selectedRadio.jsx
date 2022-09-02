import React from 'react';
import './selectedRadio.scss';

function SelectedRadio({ categories, onChange, value, name }) {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <div className="radio-select">
      {categories.map((item) => (
        <div key={item} className="radio-wraper">
          <div className="radio-select__round">
            {item === value ? <div className="radio-active"></div> : ''}
            <input
              className="radio-select__input"
              type="radio"
              name={name}
              id={item}
              checked={item === value}
              value={item}
              onChange={handleChange}
            />
          </div>
          <label>{item}</label>
        </div>
      ))}
    </div>
  );
}

export default SelectedRadio;
