const Country = ({ country }) => {
  return (
    <>
      <h1>
        {country.name.common} {country.flag}
      </h1>
      <ul>
        <li>capital: {country.capital}</li>
        <li>population: {country.population}</li>
      </ul>
      <h2>Languages</h2>
      <ul>
        {Object.keys(country.languages).map((key) => (
          <li key={key}>{country.languages[key]}</li>
        ))}
      </ul>
    </>
  );
};

export default Country;
