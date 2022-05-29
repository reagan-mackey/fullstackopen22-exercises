import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Country from "./components/Country";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSearchCountry = (event) => {
    setSearchCountry(event.target.value);
  };

  return (
    <div>
      Filter by name:
      <Filter
        searchCountry={searchCountry}
        handleSearchCountry={handleSearchCountry}
      />
      <Country searchCountry={searchCountry} countries={countries} />
    </div>
  );
};

export default App;
