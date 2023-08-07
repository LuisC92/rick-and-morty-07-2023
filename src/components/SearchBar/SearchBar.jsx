/* eslint-disable react/prop-types */

const SearchBar = ({ handleChange, searchValue }) => {
  return (
    <div className="searchBar">
      <label htmlFor="search">Search: </label>
      <input
       className="searchBar-input"
        type="text"
        name="search"
        placeholder="Search for your favorite character"
        value={searchValue}
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
};

export default SearchBar;
