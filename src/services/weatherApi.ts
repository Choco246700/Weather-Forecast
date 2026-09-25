import type {
  WeatherData,
  WeatherCondition,
  GeocodingResult,
  HourlyForecastItem,
  DailyForecastItem,
  UserLocation,
} from '../types/weather';

export const INITIAL_WEATHER_DATA: WeatherData = {
  city: 'Berlin',
  country: 'Germany',
  formattedDate: 'Tuesday, Aug 5, 2025',
  currentTemp: 20,
  condition: 'clear',
  feelsLike: 18,
  humidity: 46,
  windSpeed: 14,
  precipitation: 0.2,
  dailyForecast: [
    {
      day: 'Tue',
      fullDate: '2025-08-05',
      dayName: 'Tuesday',
      condition: 'rain',
      maxTemp: 20,
      minTemp: 14,
      precipitation: 0.2,
      feelsLike: 18,
      humidity: 46,
      windSpeed: 14,
      hourly: [
        { time: '3 PM', fullHour: 15, temp: 20, condition: 'cloudy', precipitation: 0 },
        { time: '4 PM', fullHour: 16, temp: 20, condition: 'partly-cloudy', precipitation: 0 },
        { time: '5 PM', fullHour: 17, temp: 20, condition: 'clear', precipitation: 0 },
        { time: '6 PM', fullHour: 18, temp: 19, condition: 'partly-cloudy', precipitation: 0 },
        { time: '7 PM', fullHour: 19, temp: 18, condition: 'rain', precipitation: 0.2 },
        { time: '8 PM', fullHour: 20, temp: 18, condition: 'windy', precipitation: 0 },
        { time: '9 PM', fullHour: 21, temp: 17, condition: 'cloudy', precipitation: 0 },
        { time: '10 PM', fullHour: 22, temp: 17, condition: 'overcast', precipitation: 0 },
      ],
    },
    {
      day: 'Wed',
      fullDate: '2025-08-06',
      dayName: 'Wednesday',
      condition: 'rain',
      maxTemp: 21,
      minTemp: 15,
      precipitation: 3.5,
      feelsLike: 19,
      humidity: 62,
      windSpeed: 16,
      hourly: [
        { time: '12 PM', fullHour: 12, temp: 21, condition: 'rain', precipitation: 0.8 },
        { time: '1 PM', fullHour: 13, temp: 21, condition: 'rain', precipitation: 0.6 },
        { time: '2 PM', fullHour: 14, temp: 20, condition: 'cloudy', precipitation: 0.2 },
        { time: '3 PM', fullHour: 15, temp: 20, condition: 'rain', precipitation: 1.1 },
        { time: '4 PM', fullHour: 16, temp: 19, condition: 'cloudy', precipitation: 0.3 },
        { time: '5 PM', fullHour: 17, temp: 18, condition: 'cloudy', precipitation: 0.1 },
        { time: '6 PM', fullHour: 18, temp: 17, condition: 'partly-cloudy', precipitation: 0 },
        { time: '7 PM', fullHour: 19, temp: 16, condition: 'cloudy', precipitation: 0.4 },
      ],
    },
    {
      day: 'Thu',
      fullDate: '2025-08-07',
      dayName: 'Thursday',
      condition: 'clear',
      maxTemp: 24,
      minTemp: 14,
      precipitation: 0.0,
      feelsLike: 23,
      humidity: 38,
      windSpeed: 11,
      hourly: [
        { time: '12 PM', fullHour: 12, temp: 23, condition: 'clear', precipitation: 0 },
        { time: '1 PM', fullHour: 13, temp: 24, condition: 'clear', precipitation: 0 },
        { time: '2 PM', fullHour: 14, temp: 24, condition: 'clear', precipitation: 0 },
        { time: '3 PM', fullHour: 15, temp: 24, condition: 'clear', precipitation: 0 },
        { time: '4 PM', fullHour: 16, temp: 23, condition: 'partly-cloudy', precipitation: 0 },
        { time: '5 PM', fullHour: 17, temp: 22, condition: 'partly-cloudy', precipitation: 0 },
        { time: '6 PM', fullHour: 18, temp: 20, condition: 'clear', precipitation: 0 },
        { time: '7 PM', fullHour: 19, temp: 18, condition: 'clear', precipitation: 0 },
      ],
    },
    {
      day: 'Fri',
      fullDate: '2025-08-08',
      dayName: 'Friday',
      condition: 'partly-cloudy',
      maxTemp: 25,
      minTemp: 13,
      precipitation: 0.0,
      feelsLike: 24,
      humidity: 42,
      windSpeed: 12,
      hourly: [
        { time: '12 PM', fullHour: 12, temp: 24, condition: 'partly-cloudy', precipitation: 0 },
        { time: '1 PM', fullHour: 13, temp: 25, condition: 'partly-cloudy', precipitation: 0 },
        { time: '2 PM', fullHour: 14, temp: 25, condition: 'clear', precipitation: 0 },
        { time: '3 PM', fullHour: 15, temp: 25, condition: 'partly-cloudy', precipitation: 0 },
        { time: '4 PM', fullHour: 16, temp: 24, condition: 'cloudy', precipitation: 0 },
        { time: '5 PM', fullHour: 17, temp: 22, condition: 'cloudy', precipitation: 0 },
        { time: '6 PM', fullHour: 18, temp: 21, condition: 'partly-cloudy', precipitation: 0 },
        { time: '7 PM', fullHour: 19, temp: 19, condition: 'cloudy', precipitation: 0 },
      ],
    },
    {
      day: 'Sat',
      fullDate: '2025-08-09',
      dayName: 'Saturday',
      condition: 'thunderstorm',
      maxTemp: 21,
      minTemp: 15,
      precipitation: 6.8,
      feelsLike: 20,
      humidity: 78,
      windSpeed: 22,
      hourly: [
        { time: '12 PM', fullHour: 12, temp: 21, condition: 'cloudy', precipitation: 0.2 },
        { time: '1 PM', fullHour: 13, temp: 21, condition: 'thunderstorm', precipitation: 1.5 },
        { time: '2 PM', fullHour: 14, temp: 20, condition: 'thunderstorm', precipitation: 2.1 },
        { time: '3 PM', fullHour: 15, temp: 19, condition: 'heavy-rain', precipitation: 1.8 },
        { time: '4 PM', fullHour: 16, temp: 19, condition: 'rain', precipitation: 0.8 },
        { time: '5 PM', fullHour: 17, temp: 18, condition: 'cloudy', precipitation: 0.3 },
        { time: '6 PM', fullHour: 18, temp: 17, condition: 'partly-cloudy', precipitation: 0.1 },
        { time: '7 PM', fullHour: 19, temp: 16, condition: 'cloudy', precipitation: 0 },
      ],
    },
    {
      day: 'Sun',
      fullDate: '2025-08-10',
      dayName: 'Sunday',
      condition: 'rain',
      maxTemp: 25,
      minTemp: 16,
      precipitation: 2.1,
      feelsLike: 24,
      humidity: 65,
      windSpeed: 15,
      hourly: [
        { time: '12 PM', fullHour: 12, temp: 23, condition: 'partly-cloudy', precipitation: 0 },
        { time: '1 PM', fullHour: 13, temp: 24, condition: 'cloudy', precipitation: 0.1 },
        { time: '2 PM', fullHour: 14, temp: 25, condition: 'rain', precipitation: 0.7 },
        { time: '3 PM', fullHour: 15, temp: 24, condition: 'rain', precipitation: 0.9 },
        { time: '4 PM', fullHour: 16, temp: 23, condition: 'rain', precipitation: 0.4 },
        { time: '5 PM', fullHour: 17, temp: 21, condition: 'cloudy', precipitation: 0 },
        { time: '6 PM', fullHour: 18, temp: 20, condition: 'cloudy', precipitation: 0 },
        { time: '7 PM', fullHour: 19, temp: 18, condition: 'partly-cloudy', precipitation: 0 },
      ],
    },
    {
      day: 'Mon',
      fullDate: '2025-08-11',
      dayName: 'Monday',
      condition: 'mist',
      maxTemp: 24,
      minTemp: 15,
      precipitation: 0.1,
      feelsLike: 23,
      humidity: 58,
      windSpeed: 13,
      hourly: [
        { time: '12 PM', fullHour: 12, temp: 22, condition: 'mist', precipitation: 0.1 },
        { time: '1 PM', fullHour: 13, temp: 23, condition: 'mist', precipitation: 0 },
        { time: '2 PM', fullHour: 14, temp: 24, condition: 'mist', precipitation: 0 },
        { time: '3 PM', fullHour: 15, temp: 24, condition: 'windy', precipitation: 0 },
        { time: '4 PM', fullHour: 16, temp: 23, condition: 'windy', precipitation: 0 },
        { time: '5 PM', fullHour: 17, temp: 21, condition: 'cloudy', precipitation: 0 },
        { time: '6 PM', fullHour: 18, temp: 19, condition: 'partly-cloudy', precipitation: 0 },
        { time: '7 PM', fullHour: 19, temp: 17, condition: 'cloudy', precipitation: 0 },
      ],
    },
  ],
  hourlyForecast: [
    { time: '3 PM', fullHour: 15, temp: 20, condition: 'cloudy', precipitation: 0 },
    { time: '4 PM', fullHour: 16, temp: 20, condition: 'partly-cloudy', precipitation: 0 },
    { time: '5 PM', fullHour: 17, temp: 20, condition: 'clear', precipitation: 0 },
    { time: '6 PM', fullHour: 18, temp: 19, condition: 'partly-cloudy', precipitation: 0 },
    { time: '7 PM', fullHour: 19, temp: 18, condition: 'rain', precipitation: 0.2 },
    { time: '8 PM', fullHour: 20, temp: 18, condition: 'windy', precipitation: 0 },
    { time: '9 PM', fullHour: 21, temp: 17, condition: 'cloudy', precipitation: 0 },
    { time: '10 PM', fullHour: 22, temp: 17, condition: 'overcast', precipitation: 0 },
  ],
};

export function mapWmoCodeToCondition(code: number): WeatherCondition {
  if (code === 0) return 'clear';
  if (code === 1 || code === 2) return 'partly-cloudy';
  if (code === 3) return 'cloudy';
  if (code >= 45 && code <= 48) return 'mist';
  if (code >= 51 && code <= 67) return 'rain';
  if (code >= 71 && code <= 77) return 'snow';
  if (code >= 80 && code <= 82) return 'rain';
  if (code >= 85 && code <= 86) return 'snow';
  if (code >= 95 && code <= 99) return 'thunderstorm';
  return 'partly-cloudy';
}

export function formatTimeLabel(isoString: string): string {
  const date = new Date(isoString);
  let hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  return `${hours} ${ampm}`;
}

export async function searchCities(query: string): Promise<GeocodingResult[]> {
  if (!query.trim() || query.length < 2) return [];
  try {
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        query
      )}&count=5&language=en&format=json`
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.results || [];
  } catch (err) {
    console.error('Error searching cities:', err);
    return [];
  }
}

export async function fetchWeatherForLocation(
  lat: number,
  lon: number,
  cityName: string,
  countryName: string
): Promise<WeatherData> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,apparent_temperature_max,wind_speed_10m_max&timezone=auto`;

  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch weather data');
  const data = await res.json();

  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  const dailyForecast: DailyForecastItem[] = [];
  const daysCount = Math.min(7, data.daily?.time?.length || 0);

  for (let i = 0; i < daysCount; i++) {
    const dateStr = data.daily.time[i];
    const d = new Date(dateStr + 'T12:00:00');
    const dayShort = d.toLocaleDateString('en-US', { weekday: 'short' });
    const dayFull = d.toLocaleDateString('en-US', { weekday: 'long' });

    // extract 8 hourly slots for this day
    const startIndex = i * 24;
    const hourlyForDay: HourlyForecastItem[] = [];
    let dayHumiditySum = 0;
    let dayHourlyCount = 0;

    if (data.hourly && data.hourly.time) {
      // Pick representative daytime hours e.g. 15, 16, 17, 18, 19, 20, 21, 22
      const hourIndices = [15, 16, 17, 18, 19, 20, 21, 22];
      for (const h of hourIndices) {
        const idx = startIndex + h;
        if (idx < data.hourly.time.length) {
          hourlyForDay.push({
            time: formatTimeLabel(data.hourly.time[idx]),
            fullHour: h,
            temp: Math.round(data.hourly.temperature_2m[idx]),
            condition: mapWmoCodeToCondition(data.hourly.weather_code[idx]),
            precipitation: Math.round((data.hourly.precipitation?.[idx] || 0) * 10) / 10,
          });
        }
      }

      for (let h = 0; h < 24; h++) {
        const idx = startIndex + h;
        if (idx < data.hourly.time.length && data.hourly.relative_humidity_2m?.[idx] !== undefined) {
          dayHumiditySum += data.hourly.relative_humidity_2m[idx];
          dayHourlyCount++;
        }
      }
    }

    const dayPrecipitation = data.daily?.precipitation_sum?.[i] !== undefined
      ? Math.round(data.daily.precipitation_sum[i] * 10) / 10
      : (i === 0 ? Math.round((data.current?.precipitation || 0) * 10) / 10 : 0);

    const dayFeelsLike = data.daily?.apparent_temperature_max?.[i] !== undefined
      ? Math.round(data.daily.apparent_temperature_max[i])
      : (i === 0 && data.current?.apparent_temperature !== undefined
          ? Math.round(data.current.apparent_temperature)
          : Math.round(data.daily?.temperature_2m_max?.[i] || 0));

    const dayWindSpeed = data.daily?.wind_speed_10m_max?.[i] !== undefined
      ? Math.round(data.daily.wind_speed_10m_max[i])
      : (i === 0 && data.current?.wind_speed_10m !== undefined
          ? Math.round(data.current.wind_speed_10m)
          : 0);

    const dayHumidity = i === 0 && data.current?.relative_humidity_2m !== undefined
      ? Math.round(data.current.relative_humidity_2m)
      : (dayHourlyCount > 0
          ? Math.round(dayHumiditySum / dayHourlyCount)
          : 50);

    dailyForecast.push({
      day: dayShort,
      fullDate: dateStr,
      dayName: dayFull,
      condition: mapWmoCodeToCondition(data.daily.weather_code[i]),
      maxTemp: Math.round(data.daily.temperature_2m_max[i]),
      minTemp: Math.round(data.daily.temperature_2m_min[i]),
      precipitation: dayPrecipitation,
      feelsLike: dayFeelsLike,
      windSpeed: dayWindSpeed,
      humidity: dayHumidity,
      hourly: hourlyForDay.length > 0 ? hourlyForDay : INITIAL_WEATHER_DATA.hourlyForecast,
    });
  }

  // Current day precipitation: prefer daily sum if available, or current
  const currentPrecip = data.daily?.precipitation_sum?.[0] !== undefined
    ? Math.round(data.daily.precipitation_sum[0] * 10) / 10
    : Math.round((data.current?.precipitation || 0) * 10) / 10;

  return {
    city: cityName,
    country: countryName,
    formattedDate: formattedDate,
    currentTemp: Math.round(data.current.temperature_2m),
    condition: mapWmoCodeToCondition(data.current.weather_code),
    feelsLike: Math.round(data.current.apparent_temperature),
    humidity: Math.round(data.current.relative_humidity_2m),
    windSpeed: Math.round(data.current.wind_speed_10m),
    precipitation: currentPrecip,
    dailyForecast: dailyForecast.length > 0 ? dailyForecast : INITIAL_WEATHER_DATA.dailyForecast,
    hourlyForecast: dailyForecast[0]?.hourly || INITIAL_WEATHER_DATA.hourlyForecast,
  };
}

export function convertTemperature(celsius: number, unit: 'celsius' | 'fahrenheit'): number {
  if (unit === 'fahrenheit') {
    return Math.round((celsius * 9) / 5 + 32);
  }
  return celsius;
}

export function convertSpeed(kmh: number, unit: 'kmh' | 'mph'): number {
  if (unit === 'mph') {
    return Math.round(kmh * 0.621371);
  }
  return kmh;
}

export function convertPrecipitation(mm: number, unit: 'mm' | 'inch'): number {
  if (unit === 'inch') {
    const inches = mm * 0.0393701;
    // Format to 2 decimal places if needed or 1 if rounded
    return Math.round(inches * 100) / 100;
  }
  return Math.round(mm * 10) / 10;
}

export async function reverseGeocode(
  lat: number,
  lon: number
): Promise<{ city: string; country: string }> {
  try {
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    );
    if (res.ok) {
      const data = await res.json();
      const city =
        data.city ||
        data.locality ||
        data.principalSubdivision ||
        'Current Location';
      const country = data.countryName || '';
      return { city, country };
    }
  } catch (err) {
    console.warn('Reverse geocoding error:', err);
  }
  return { city: 'Current Location', country: '' };
}

export async function getUserLocation(): Promise<UserLocation> {
  // 1. Attempt Browser Geolocation
  if (typeof navigator !== 'undefined' && 'geolocation' in navigator) {
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 6000,
          maximumAge: 300000,
          enableHighAccuracy: false,
        });
      });

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const { city, country } = await reverseGeocode(lat, lon);
      return { latitude: lat, longitude: lon, city, country };
    } catch (err) {
      console.log('Browser geolocation unavailable or declined, attempting IP lookup:', err);
    }
  }

  // 2. Fallback to IP geolocation
  try {
    const res = await fetch('https://ipwho.is/');
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.latitude && data.longitude) {
        return {
          latitude: data.latitude,
          longitude: data.longitude,
          city: data.city || data.region || 'Current Location',
          country: data.country || '',
        };
      }
    }
  } catch (err) {
    console.warn('IP geolocation lookup failed:', err);
  }

  // 3. Fallback default
  return {
    latitude: 52.52,
    longitude: 13.41,
    city: 'Berlin',
    country: 'Germany',
  };
}
