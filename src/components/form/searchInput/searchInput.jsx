import React from 'react';
import './searchInput.scss';
function SearchInput({ name, onChange, value }) {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className="input-container">
      <input
        className="search-input"
        type="text"
        name={name}
        onChange={handleChange}
        value={value}
        placeholder="Start type a name"
      />
    </div>
  );
}

export default SearchInput;
