const Country = ({ searchCountry, countries }) => {
  let filteredCountries = countries.filter((country) =>
    JSON.stringify(country.name.common)
      .toLowerCase()
      .includes(searchCountry.toLowerCase())
  );

  if (filteredCountries.length > 10 && searchCountry !== "") {
    return <p>Too many matches.</p>;
  } else if (filteredCountries.length >= 2 && searchCountry !== "") {
    return (
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ul>
    );
  } else if (filteredCountries.length === 1 && searchCountry !== "") {
    return (
      <>
        <h1>
          {filteredCountries[0].name.common} {filteredCountries[0].flag}
        </h1>
        <ul>
          <li>capital: {filteredCountries[0].capital}</li>
          <li>population: {filteredCountries[0].population}</li>
        </ul>
        <h2>Languages</h2>
        <ul>
          {Object.keys(filteredCountries[0].languages).map((key) => (
            <li key={key}>{filteredCountries[0].languages[key]}</li>
          ))}
        </ul>
      </>
    );
  }
};

export default Country;
