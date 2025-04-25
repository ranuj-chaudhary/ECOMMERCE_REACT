import React from 'react';

const Search = ({
  setItemsPerPage,
  setSearchQuery,
  itemsPerPage,
  searchQuery,
}) => {
  return (
    <div className="flex justify-between items-center gap-4 w-full">
      <select
        name="pages"
        id=""
        className="w-10 h-10 text-center bg-gray-200 rounded-md text-black"
        onClick={(e) => setItemsPerPage(parseInt(e.target.value))}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <input
        className=" px-4 py-2 rounded border border-gray-300 appearance-none   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        placeholder="Search by name or id"
        name="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
