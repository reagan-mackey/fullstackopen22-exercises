import Country from "./Country";

const Countries = ({ searchCountry, countries, setSearchCountry }) => {
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  );

  if (filteredCountries.length > 10 && searchCountry !== "") {
    return <p>Too many matches.</p>;
  } else if (filteredCountries.length >= 2 && searchCountry !== "") {
    return (
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.name.common}>
            {country.name.common}{" "}
            <button onClick={() => setSearchCountry(country.name.common)}>
              show
            </button>
          </li>
        ))}
      </ul>
    );
  } else if (filteredCountries.length === 1 && searchCountry !== "") {
    return <Country country={filteredCountries[0]} />;
  }
};

export default Countries;
