import React from 'react';
import type { WeatherCondition } from '../types/weather';

interface WeatherIconProps {
  condition: WeatherCondition;
  size?: number;
  className?: string;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ condition, size = 28, className = '' }) => {
  switch (condition) {
    case 'clear':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Sun Core */}
          <circle cx="16" cy="16" r="6.5" fill="url(#sun-grad)" />
          {/* Sun Rays */}
          <g stroke="#f59e0b" strokeWidth="2" strokeLinecap="round">
            <line x1="16" y1="3" x2="16" y2="6.5" />
            <line x1="16" y1="25.5" x2="16" y2="29" />
            <line x1="3" y1="16" x2="6.5" y2="16" />
            <line x1="25.5" y1="16" x2="29" y2="16" />
            <line x1="6.8" y1="6.8" x2="9.3" y2="9.3" />
            <line x1="22.7" y1="22.7" x2="25.2" y2="25.2" />
            <line x1="6.8" y1="25.2" x2="9.3" y2="22.7" />
            <line x1="22.7" y1="9.3" x2="25.2" y2="6.8" />
          </g>
          <defs>
            <linearGradient id="sun-grad" x1="10" y1="10" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fbbf24" />
              <stop offset="1" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'partly-cloudy':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Sun peeking */}
          <circle cx="20" cy="12" r="4.5" fill="#fbbf24" />
          <g stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round">
            <line x1="20" y1="4" x2="20" y2="6" />
            <line x1="26" y1="12" x2="28" y2="12" />
            <line x1="24.5" y1="7.5" x2="26" y2="6" />
          </g>
          {/* Cloud */}
          <path
            d="M19 23H10C7.79 23 6 21.21 6 19C6 16.95 7.55 15.26 9.55 15.03C10.2 12.69 12.35 11 14.9 11C18.05 11 20.65 13.35 20.95 16.4C22.68 16.75 24 18.23 24 20C24 21.66 22.66 23 21 23H19Z"
            fill="url(#cloud-grad)"
          />
          <defs>
            <linearGradient id="cloud-grad" x1="6" y1="11" x2="24" y2="23" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e2e8f0" />
              <stop offset="1" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'cloudy':
    case 'overcast':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M23 22H9C6.79 22 5 20.21 5 18C5 15.9 6.6 14.17 8.68 14.02C9.37 11.13 11.94 9 15 9C18.64 9 21.64 11.77 21.96 15.38C23.69 15.73 25 17.21 25 19C25 20.66 23.66 22 22 22H23Z"
            fill="url(#cloud-gray)"
          />
          <defs>
            <linearGradient id="cloud-gray" x1="5" y1="9" x2="25" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#cbd5e1" />
              <stop offset="1" stopColor="#64748b" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'rain':
    case 'heavy-rain':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Cloud */}
          <path
            d="M22 18H9C7.34 18 6 16.66 6 15C6 13.43 7.2 12.13 8.76 12.01C9.37 9.7 11.48 8 14 8C17.04 8 19.55 10.31 19.82 13.32C21.08 13.62 22 14.7 22 16C22 17.1 21.1 18 20 18H22Z"
            fill="url(#rain-cloud-grad)"
          />
          {/* Rain Drops */}
          <g stroke="#60a5fa" strokeWidth="2" strokeLinecap="round">
            <line x1="10" y1="21" x2="8.5" y2="25" />
            <line x1="15" y1="21" x2="13.5" y2="25" />
            <line x1="20" y1="21" x2="18.5" y2="25" />
          </g>
          <defs>
            <linearGradient id="rain-cloud-grad" x1="6" y1="8" x2="22" y2="18" gradientUnits="userSpaceOnUse">
              <stop stopColor="#cbd5e1" />
              <stop offset="1" stopColor="#64748b" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'thunderstorm':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Cloud */}
          <path
            d="M22 17H9C7.34 17 6 15.66 6 14C6 12.43 7.2 11.13 8.76 11.01C9.37 8.7 11.48 7 14 7C17.04 7 19.55 9.31 19.82 12.32C21.08 12.62 22 13.7 22 15C22 16.1 21.1 17 20 17H22Z"
            fill="url(#thunder-cloud)"
          />
          {/* Lightning Bolt */}
          <path
            d="M17 14L12 21H16L14 27L20 19H16L18 14H17Z"
            fill="#facc15"
            stroke="#eab308"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="thunder-cloud" x1="6" y1="7" x2="22" y2="17" gradientUnits="userSpaceOnUse">
              <stop stopColor="#94a3b8" />
              <stop offset="1" stopColor="#475569" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'mist':
    case 'windy':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <g stroke="#94a3b8" strokeWidth="2" strokeLinecap="round">
            <path d="M6 11H20C22 11 23.5 9.5 23.5 8C23.5 6.5 22 5 20 5C18.5 5 17.5 6 17.5 7" />
            <path d="M4 16H23C25 16 26.5 17.5 26.5 19C26.5 20.5 25 22 23 22C21.5 22 20.5 21 20.5 20" />
            <path d="M8 21H16" />
          </g>
        </svg>
      );

    case 'snow':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M22 17H9C7.34 17 6 15.66 6 14C6 12.43 7.2 11.13 8.76 11.01C9.37 8.7 11.48 7 14 7C17.04 7 19.55 9.31 19.82 12.32C21.08 12.62 22 13.7 22 15C22 16.1 21.1 17 20 17H22Z"
            fill="#94a3b8"
          />
          <circle cx="10" cy="22" r="1.5" fill="#e0f2fe" />
          <circle cx="15" cy="25" r="1.5" fill="#e0f2fe" />
          <circle cx="20" cy="22" r="1.5" fill="#e0f2fe" />
        </svg>
      );

    default:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="16" cy="16" r="6" fill="#fbbf24" />
        </svg>
      );
  }
};
