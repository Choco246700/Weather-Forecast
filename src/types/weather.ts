export type TemperatureUnit = 'celsius' | 'fahrenheit';
export type SpeedUnit = 'kmh' | 'mph';
export type PrecipitationUnit = 'mm' | 'inch';

export interface WeatherUnitsConfig {
  temp: TemperatureUnit;
  speed: SpeedUnit;
  precip: PrecipitationUnit;
}

export type WeatherCondition =
  | 'clear'
  | 'partly-cloudy'
  | 'cloudy'
  | 'overcast'
  | 'rain'
  | 'heavy-rain'
  | 'thunderstorm'
  | 'snow'
  | 'mist'
  | 'windy';

export interface HourlyForecastItem {
  time: string; // e.g., "3 PM"
  fullHour: number;
  temp: number;
  condition: WeatherCondition;
  precipitation?: number;
  icon?: string;
}

export interface DailyForecastItem {
  day: string; // e.g. "Tue", "Wed"
  fullDate: string; // e.g. "2025-08-05"
  dayName: string; // e.g. "Tuesday"
  condition: WeatherCondition;
  maxTemp: number;
  minTemp: number;
  precipitation?: number;
  feelsLike?: number;
  humidity?: number;
  windSpeed?: number;
  hourly: HourlyForecastItem[];
}

export interface WeatherData {
  city: string;
  country: string;
  formattedDate: string; // e.g. "Tuesday, Aug 5, 2025"
  currentTemp: number;
  condition: WeatherCondition;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  precipitation: number;
  dailyForecast: DailyForecastItem[];
  hourlyForecast: HourlyForecastItem[];
}

export interface GeocodingResult {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  admin1?: string;
}

export interface UserLocation {
  latitude: number;
  longitude: number;
  city: string;
  country: string;
}
