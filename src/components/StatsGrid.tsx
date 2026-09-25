import React from 'react';
import type { WeatherData, WeatherUnitsConfig } from '../types/weather';
import {
  convertTemperature,
  convertSpeed,
  convertPrecipitation,
} from '../services/weatherApi';

interface StatsGridProps {
  weather: WeatherData;
  units: WeatherUnitsConfig;
  selectedDayIndex?: number;
}

export const StatsGrid: React.FC<StatsGridProps> = ({
  weather,
  units,
  selectedDayIndex = 0,
}) => {
  const currentSelectedDay = weather.dailyForecast?.[selectedDayIndex];

  const feelsLikeVal =
    selectedDayIndex === 0
      ? weather.feelsLike
      : currentSelectedDay?.feelsLike ?? weather.feelsLike;

  const humidityVal =
    selectedDayIndex === 0
      ? weather.humidity
      : currentSelectedDay?.humidity ?? weather.humidity;

  const windVal =
    selectedDayIndex === 0
      ? weather.windSpeed
      : currentSelectedDay?.windSpeed ?? weather.windSpeed;

  const precipVal =
    selectedDayIndex === 0
      ? weather.precipitation
      : currentSelectedDay?.precipitation ?? weather.precipitation;

  const displayFeelsLike = convertTemperature(feelsLikeVal, units.temp);
  const displayWind = convertSpeed(windVal, units.speed);
  const displayPrecip = convertPrecipitation(precipVal, units.precip);

  const windUnitLabel = units.speed === 'kmh' ? 'km/h' : 'mph';
  const precipUnitLabel = units.precip === 'mm' ? 'mm' : 'in';

  return (
    <div className="stats-grid">
      {/* Feels Like Card */}
      <div className="stat-card">
        <span className="stat-label">Feels Like</span>
        <span className="stat-value">{displayFeelsLike}°</span>
      </div>

      {/* Humidity Card */}
      <div className="stat-card">
        <span className="stat-label">Humidity</span>
        <span className="stat-value">{humidityVal}%</span>
      </div>

      {/* Wind Card */}
      <div className="stat-card">
        <span className="stat-label">Wind</span>
        <span className="stat-value">
          {displayWind} {windUnitLabel}
        </span>
      </div>

      {/* Precipitation Card */}
      <div className="stat-card">
        <span className="stat-label">Precipitation</span>
        <span className="stat-value">
          {displayPrecip} {precipUnitLabel}
        </span>
      </div>
    </div>
  );
};
