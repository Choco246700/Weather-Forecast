import React from 'react';
import type { DailyForecastItem, WeatherUnitsConfig } from '../types/weather';
import { WeatherIcon } from './WeatherIcon';
import { convertTemperature } from '../services/weatherApi';

interface DailyForecastProps {
  forecast: DailyForecastItem[];
  units: WeatherUnitsConfig;
  selectedDayIndex: number;
  onSelectDay: (index: number) => void;
}

export const DailyForecast: React.FC<DailyForecastProps> = ({
  forecast,
  units,
  selectedDayIndex,
  onSelectDay,
}) => {
  return (
    <div className="daily-forecast-section">
      <h3 className="section-title">Daily forecast</h3>
      <div className="daily-cards-container">
        {forecast.slice(0, 7).map((item, index) => {
          const maxTemp = convertTemperature(item.maxTemp, units.temp);
          const minTemp = convertTemperature(item.minTemp, units.temp);
          const isSelected = selectedDayIndex === index;

          return (
            <div
              key={`${item.day}-${index}`}
              className={`daily-card ${isSelected ? 'active-day' : ''}`}
              onClick={() => onSelectDay(index)}
              title={`Click to view hourly forecast for ${item.dayName}`}
            >
              <span className="daily-day-label">{item.day}</span>
              <div className="daily-icon-wrapper">
                <WeatherIcon condition={item.condition} size={28} />
              </div>
              <div className="daily-temp-row">
                <span className="temp-max">{maxTemp}°</span>
                <span className="temp-min">{minTemp}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
