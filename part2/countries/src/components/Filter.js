const Filter = ({ searchCountry, handleSearchCountry }) => {
  return <input value={searchCountry} onChange={handleSearchCountry} />;
};

export default Filter;
