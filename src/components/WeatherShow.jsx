import { useLocation } from "react-router-dom";

export default function WeatherShow() {
  const location = useLocation();
  const city = location.state;

  if (!city) return <p>No data available</p>;

  return (
    <div className="container">
      <hr className="hr1" />
      <div className="inner-container">
        <h1>Weather Details</h1>
        <p className="show-weather">City: {city.name}</p>
        <p className="show-weather">Temperature: {city.temprature}</p>
        <p className="show-weather">Humidity: {city.humidity}</p>
        <p className="show-weather">Wind Speed: {city.speed}</p>
      </div>
    </div>
  );
}
