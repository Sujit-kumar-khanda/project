import { createContext, useState } from "react";

export const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("Bhubaneswar");
  const [weatherData, setWeatherData] = useState(null);
  const [coords, setCoords] = useState({ lat: null, lon: null });

  return (
    <weatherContext.Provider
      value={{
        city,
        setCity,
        weatherData,
        setWeatherData,
        coords,
        setCoords,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
};
