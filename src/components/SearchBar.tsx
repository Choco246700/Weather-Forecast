import React, { useState, useEffect, useRef } from "react";
import { Search, Loader2, MapPin } from "lucide-react";
import type { GeocodingResult } from "../types/weather";
import { searchCities } from "../services/weatherApi";

interface SearchBarProps {
  onSelectCity: (
    lat: number,
    lon: number,
    cityName: string,
    countryName: string,
  ) => void;
  isLoading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSelectCity,
  isLoading,
}) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<GeocodingResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Debounced live city search
  useEffect(() => {
    if (query.trim().length < 2) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearching(true);
      try {
        const results = await searchCities(query);
        setSuggestions(results);
        setShowSuggestions(results.length > 0);
      } catch {
        setSuggestions([]);
      } finally {
        setIsSearching(false);
      }
    }, 280);

    return () => clearTimeout(timer);
  }, [query]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (city: GeocodingResult) => {
    setQuery(`${city.name}, ${city.country}`);
    setShowSuggestions(false);
    onSelectCity(city.latitude, city.longitude, city.name, city.country);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    if (suggestions.length > 0) {
      handleSelect(suggestions[0]);
    } else {
      setIsSearching(true);
      const results = await searchCities(query);
      setIsSearching(false);
      if (results.length > 0) {
        handleSelect(results[0]);
      }
    }
  };

  return (
    <div className="search-section" ref={searchContainerRef}>
      <h1 className="main-headline">How's the sky looking today?</h1>

      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search for a place..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => {
              if (suggestions.length > 0) setShowSuggestions(true);
            }}
          />
          {(isSearching || isLoading) && (
            <Loader2 size={16} className="search-spinner" />
          )}
        </div>

        <button type="submit" className="search-btn" disabled={isLoading}>
          Search
        </button>

        {showSuggestions && suggestions.length > 0 && (
          <ul className="suggestions-dropdown animate-fadeIn">
            {suggestions.map((item) => (
              <li
                key={item.id}
                className="suggestion-item"
                onClick={() => handleSelect(item)}
              >
                <MapPin size={15} className="suggestion-pin-icon" />
                <div className="suggestion-text">
                  <span className="suggestion-name">{item.name}</span>
                  <span className="suggestion-location">
                    {[item.admin1, item.country].filter(Boolean).join(", ")}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};
