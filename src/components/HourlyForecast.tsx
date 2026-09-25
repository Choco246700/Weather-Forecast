import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import type { DailyForecastItem, WeatherUnitsConfig } from '../types/weather';
import { WeatherIcon } from './WeatherIcon';
import { convertTemperature } from '../services/weatherApi';

interface HourlyForecastProps {
  dailyForecast: DailyForecastItem[];
  selectedDayIndex: number;
  onSelectDay: (index: number) => void;
  units: WeatherUnitsConfig;
}

export const HourlyForecast: React.FC<HourlyForecastProps> = ({
  dailyForecast,
  selectedDayIndex,
  onSelectDay,
  units,
}) => {
  const [dayDropdownOpen, setDayDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentDay = dailyForecast[selectedDayIndex] || dailyForecast[0];
  const hourlyList = currentDay?.hourly || [];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDayDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="hourly-forecast-card">
      {/* Header with Title and Day Dropdown */}
      <div className="hourly-header">
        <h3 className="hourly-title">Hourly forecast</h3>

        <div className="hourly-day-dropdown-wrapper" ref={dropdownRef}>
          <button
            className="hourly-day-btn"
            onClick={() => setDayDropdownOpen(!dayDropdownOpen)}
            aria-expanded={dayDropdownOpen}
          >
            <span>{currentDay?.dayName || 'Tuesday'}</span>
            <ChevronDown size={14} className={`chevron-icon ${dayDropdownOpen ? 'rotate' : ''}`} />
          </button>

          {dayDropdownOpen && (
            <div className="hourly-day-menu animate-fadeIn">
              {dailyForecast.map((day, idx) => (
                <button
                  key={`${day.day}-${idx}`}
                  className={`hourly-day-menu-item ${idx === selectedDayIndex ? 'active' : ''}`}
                  onClick={() => {
                    onSelectDay(idx);
                    setDayDropdownOpen(false);
                  }}
                >
                  <span>{day.dayName}</span>
                  {idx === selectedDayIndex && <Check size={14} />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Hourly items list */}
      <div className="hourly-list">
        {hourlyList.map((item, index) => {
          const temp = convertTemperature(item.temp, units.temp);
          return (
            <div key={`${item.time}-${index}`} className="hourly-item">
              <div className="hourly-item-left">
                <WeatherIcon condition={item.condition} size={22} className="hourly-icon" />
                <span className="hourly-time">{item.time}</span>
              </div>
              <span className="hourly-temp">{temp}°</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
