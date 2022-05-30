import { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

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
      <input value={searchCountry} onChange={handleSearchCountry} />
      <Countries
        searchCountry={searchCountry}
        countries={countries}
        setSearchCountry={setSearchCountry}
      />
    </div>
  );
};

export default App;
