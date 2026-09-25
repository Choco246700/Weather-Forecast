import React from 'react';
import type { WeatherData, WeatherUnitsConfig } from '../types/weather';
import { convertTemperature } from '../services/weatherApi';

interface HeroCardProps {
  weather: WeatherData;
  units: WeatherUnitsConfig;
}

export const HeroCard: React.FC<HeroCardProps> = ({ weather, units }) => {
  const displayTemp = convertTemperature(weather.currentTemp, units.temp);

  return (
    <div className="hero-weather-card">
      {/* Background ambient elements */}
      <div className="hero-stars-overlay">
        <span className="star-dot dot-1" />
        <span className="star-dot dot-2" />
        <span className="star-dot dot-3" />
        <span className="star-dot dot-4" />
      </div>

      {/* Cloud silhouette glow at bottom right */}
      <div className="hero-cloud-silhouette" />

      {/* Left Info */}
      <div className="hero-left-info">
        <h2 className="hero-city-title">
          {weather.city}, {weather.country}
        </h2>
        <p className="hero-date-subtitle">{weather.formattedDate}</p>
      </div>

      {/* Right Info */}
      <div className="hero-right-info">
        <div className="hero-sun-icon-wrapper">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Glow Aura */}
            <circle cx="22" cy="22" r="14" fill="#fbbf24" fillOpacity="0.25" filter="blur(4px)" />
            {/* Sun Body */}
            <circle cx="22" cy="22" r="9" fill="url(#hero-sun-grad)" />
            {/* Rays */}
            <g stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round">
              <line x1="22" y1="4" x2="22" y2="8" />
              <line x1="22" y1="36" x2="22" y2="40" />
              <line x1="4" y1="22" x2="8" y2="22" />
              <line x1="36" y1="22" x2="40" y2="22" />
              <line x1="9.3" y1="9.3" x2="12.5" y2="12.5" />
              <line x1="31.5" y1="31.5" x2="34.7" y2="34.7" />
              <line x1="9.3" y1="34.7" x2="12.5" y2="31.5" />
              <line x1="31.5" y1="12.5" x2="34.7" y2="9.3" />
            </g>
            <defs>
              <linearGradient id="hero-sun-grad" x1="13" y1="13" x2="31" y2="31" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fef08a" />
                <stop offset="0.5" stopColor="#fbbf24" />
                <stop offset="1" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span className="hero-temperature">{displayTemp}°</span>
      </div>
    </div>
  );
};
