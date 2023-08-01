/* eslint-disable react/prop-types */

const SearchBar = ({ handleChange, searchValue }) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
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
