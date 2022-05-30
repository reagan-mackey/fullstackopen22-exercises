import { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Weather";

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${key}&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [country.capital, key]);

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
      <Weather weather={weather} capital={country.capital} />
    </>
  );
};

export default Country;
