const Filter = ({ searchName, handleSearchName }) => {
  return <input value={searchName} onChange={handleSearchName} />;
};

export default Filter;
