import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="mt-24 mb-12">
      <input
        type="text"
        placeholder="Search for a stock"
        className="p-2 border border-gray-300 rounded"
      ></input>
    </div>
  );
};

export default SearchBar;
