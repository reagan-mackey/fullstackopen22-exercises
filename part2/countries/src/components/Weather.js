const Weather = ({ weather, capital }) => {
  if (weather === null) return null;

  return (
    <div>
      <h3>Weather in {capital}</h3>
      Temperature: {weather.main.temp} C
      <br />
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={`icon for ${weather.weather[0].description}`}
      />
      <br />
      Wind: {weather.wind.speed} m/s
    </div>
  );
};

export default Weather;
