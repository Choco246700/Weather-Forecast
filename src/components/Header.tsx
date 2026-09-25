import React, { useState, useRef, useEffect } from 'react';
import { Settings, ChevronDown, Check } from 'lucide-react';
import type { WeatherUnitsConfig } from '../types/weather';

interface HeaderProps {
  units: WeatherUnitsConfig;
  setUnits: React.Dispatch<React.SetStateAction<WeatherUnitsConfig>>;
}

export const Header: React.FC<HeaderProps> = ({ units, setUnits }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header-container">
      {/* Brand Logo */}
      <div className="brand-logo">
        <div className="sun-icon-container">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5" fill="#f59e0b" />
            <g stroke="#f59e0b" strokeWidth="2" strokeLinecap="round">
              <line x1="12" y1="1.5" x2="12" y2="4.5" />
              <line x1="12" y1="19.5" x2="12" y2="22.5" />
              <line x1="1.5" y1="12" x2="4.5" y2="12" />
              <line x1="19.5" y1="12" x2="22.5" y2="12" />
              <line x1="4.5" y1="4.5" x2="6.7" y2="6.7" />
              <line x1="17.3" y1="17.3" x2="19.5" y2="19.5" />
              <line x1="4.5" y1="19.5" x2="6.7" y2="17.3" />
              <line x1="17.3" y1="6.7" x2="19.5" y2="4.5" />
            </g>
          </svg>
        </div>
        <span className="brand-name">Weather Now</span>
      </div>

      {/* Units Selector */}
      <div className="units-menu-wrapper" ref={dropdownRef}>
        <button
          className="units-btn"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-expanded={dropdownOpen}
          aria-haspopup="true"
        >
          <Settings size={15} className="gear-icon" />
          <span>Units</span>
          <ChevronDown size={14} className={`chevron-icon ${dropdownOpen ? 'rotate' : ''}`} />
        </button>

        {dropdownOpen && (
          <div className="units-dropdown-panel animate-fadeIn">
            <div className="units-section">
              <div className="units-section-title">Temperature</div>
              <div className="units-options-row">
                <button
                  className={`unit-toggle-btn ${units.temp === 'celsius' ? 'active' : ''}`}
                  onClick={() => setUnits((u) => ({ ...u, temp: 'celsius' }))}
                >
                  <span>°C (Celsius)</span>
                  {units.temp === 'celsius' && <Check size={14} />}
                </button>
                <button
                  className={`unit-toggle-btn ${units.temp === 'fahrenheit' ? 'active' : ''}`}
                  onClick={() => setUnits((u) => ({ ...u, temp: 'fahrenheit' }))}
                >
                  <span>°F (Fahrenheit)</span>
                  {units.temp === 'fahrenheit' && <Check size={14} />}
                </button>
              </div>
            </div>

            <div className="units-divider" />

            <div className="units-section">
              <div className="units-section-title">Wind Speed</div>
              <div className="units-options-row">
                <button
                  className={`unit-toggle-btn ${units.speed === 'kmh' ? 'active' : ''}`}
                  onClick={() => setUnits((u) => ({ ...u, speed: 'kmh' }))}
                >
                  <span>km/h</span>
                  {units.speed === 'kmh' && <Check size={14} />}
                </button>
                <button
                  className={`unit-toggle-btn ${units.speed === 'mph' ? 'active' : ''}`}
                  onClick={() => setUnits((u) => ({ ...u, speed: 'mph' }))}
                >
                  <span>mph</span>
                  {units.speed === 'mph' && <Check size={14} />}
                </button>
              </div>
            </div>

            <div className="units-divider" />

            <div className="units-section">
              <div className="units-section-title">Precipitation</div>
              <div className="units-options-row">
                <button
                  className={`unit-toggle-btn ${units.precip === 'mm' ? 'active' : ''}`}
                  onClick={() => setUnits((u) => ({ ...u, precip: 'mm' }))}
                >
                  <span>Millimeters (mm)</span>
                  {units.precip === 'mm' && <Check size={14} />}
                </button>
                <button
                  className={`unit-toggle-btn ${units.precip === 'inch' ? 'active' : ''}`}
                  onClick={() => setUnits((u) => ({ ...u, precip: 'inch' }))}
                >
                  <span>Inches (in)</span>
                  {units.precip === 'inch' && <Check size={14} />}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
