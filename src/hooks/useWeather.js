import { useContext, useEffect, useState } from "react";
import { weatherContext } from "../store/weatherContext";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const useWeather = () => {
  const { city, coords, setWeatherData } = useContext(weatherContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(""); // clear previous error before new fetch

        let url = "";

        //  CASE 1: Use GPS coordinates
        if (coords?.lat && coords?.lon) {
          url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric`;
        }

        //  CASE 2: Use city name
        else if (city) {
          // check cache only for city search
          const cached = localStorage.getItem(`weather_${city}`);

          if (cached) {
            const parsed = JSON.parse(cached);

            if (Date.now() - parsed.timestamp < 10 * 60 * 1000) {
              setWeatherData(parsed.data);
              return;
            }
          }

          url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        }

        // If no source available, stop
        else return;

        const res = await fetch(url);

        if (!res.ok) throw new Error("Location not found");

        const data = await res.json();
        setWeatherData(data);

        // Save to cache only when city search is used
        if (city) {
          localStorage.setItem(
            `weather_${city}`,
            JSON.stringify({
              data,
              timestamp: Date.now(),
            })
          );
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, coords]); // refetch when city OR GPS changes

  return { loading, error };
};
