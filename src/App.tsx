import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { HeroCard } from './components/HeroCard';
import { StatsGrid } from './components/StatsGrid';
import { DailyForecast } from './components/DailyForecast';
import { HourlyForecast } from './components/HourlyForecast';
import {
  INITIAL_WEATHER_DATA,
  fetchWeatherForLocation,
  getUserLocation,
} from './services/weatherApi';
import type { WeatherData, WeatherUnitsConfig } from './types/weather';
import './App.css';

export function App() {
  const [weatherData, setWeatherData] = useState<WeatherData>(INITIAL_WEATHER_DATA);
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [units, setUnits] = useState<WeatherUnitsConfig>({
    temp: 'celsius',
    speed: 'kmh',
    precip: 'mm',
  });

  const handleSelectCity = async (
    lat: number,
    lon: number,
    cityName: string,
    countryName: string
  ) => {
    setIsLoading(true);
    try {
      const data = await fetchWeatherForLocation(lat, lon, cityName, countryName);
      setWeatherData(data);
      setSelectedDayIndex(0);
    } catch (err) {
      console.error('Failed to load weather:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch live weather data for user's location on initial mount
  useEffect(() => {
    const initUserWeather = async () => {
      setIsLoading(true);
      try {
        const userLoc = await getUserLocation();
        await handleSelectCity(
          userLoc.latitude,
          userLoc.longitude,
          userLoc.city,
          userLoc.country
        );
      } catch (err) {
        console.error('Failed to get user location weather:', err);
        handleSelectCity(52.52, 13.41, 'Berlin', 'Germany');
      } finally {
        setIsLoading(false);
      }
    };

    initUserWeather();
  }, []);

  return (
    <div className="weather-app-root">
      {/* Subtle background decorative shapes matching the screenshot presentation */}
      <div className="bg-dots-pattern top-right" />
      <div className="bg-curly-brackets left" />
      <div className="bg-zigzag bottom" />
      <div className="bg-circle right" />

      {/* Main App Container */}
      <main className="app-canvas-container">
        {/* Top Header */}
        <Header units={units} setUnits={setUnits} />

        {/* Search Bar Section */}
        <SearchBar onSelectCity={handleSelectCity} isLoading={isLoading} />

        {/* 2-Column Weather Layout */}
        <div className="weather-content-grid">
          {/* Left Column: Hero, Stats, Daily Forecast */}
          <div className="weather-left-col">
            <HeroCard weather={weatherData} units={units} />
            <StatsGrid
              weather={weatherData}
              selectedDayIndex={selectedDayIndex}
              units={units}
            />
            <DailyForecast
              forecast={weatherData.dailyForecast}
              units={units}
              selectedDayIndex={selectedDayIndex}
              onSelectDay={setSelectedDayIndex}
            />
          </div>

          {/* Right Column: Hourly Forecast */}
          <div className="weather-right-col">
            <HourlyForecast
              dailyForecast={weatherData.dailyForecast}
              selectedDayIndex={selectedDayIndex}
              onSelectDay={setSelectedDayIndex}
              units={units}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
