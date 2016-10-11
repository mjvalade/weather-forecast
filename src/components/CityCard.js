import React, { Component } from 'react';
import { Link } from 'react-router';

export default class CityCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: this.props.zipcode,
      currentTemp: null,
      condition: null,
      cityName: null
    };
  }
  fetchCurrentWeatherByZip(zipcode) {
      const apiKey = 'cbc43ed2ea5ef4a7aa9e8cf85994a583';
      let weatherURLbyZip = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${apiKey}`;
          return fetch(weatherURLbyZip)
              .then(response => response.json())
              .then(weatherByZip => this.setState({
                currentTemp: Math.round(weatherByZip.main.temp),
                condition: weatherByZip.weather[0].main,
                cityName: weatherByZip.name
              }));
      };

      componentDidMount() {
        this.fetchCurrentWeatherByZip(this.state.zipcode)
      }
render() {
  return (
    <section className="city-card">
        <article className="pinned-forecast-extended">
          <Link to="/ExtendedForecast"
            // add route to extended forecast for particular zipcode
            className="pinned-link">
            View Extended Forecast &#10163;
          </Link>
        </article>
      </section>
    );
  };
}
