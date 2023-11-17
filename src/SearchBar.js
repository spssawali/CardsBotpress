import React, { useState } from 'react';

const SearchBar = ({ searchTerm, onSearch, onSearchTermChange }) => {
  const handleSearch = () => {
    onSearch();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search cards..."
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;