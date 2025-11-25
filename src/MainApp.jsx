import { useContext } from "react";

import WeatherCard from "./components/WeatherCard";

import { weatherContext } from "./store/weatherContext";
import { useWeather } from "./hooks/useWeather";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

function MainApp() {
  const { city, weatherData } = useContext(weatherContext);

  // Fetch whenever city changes
  const { loading, error } = useWeather(city);

  return (
    <div
      className="
        min-h-screen flex flex-col justify-between 
        bg-linear-to-br from-blue-300 via-blue-400 to-blue-600
        dark:from-gray-900 dark:via-gray-800 dark:to-black
      "
    >
      <Navbar />

      <main className="flex flex-col items-center mt-6 px-4">
        {loading && <p className="text-gray-600 text-lg">Loading...</p>}

        {error && <p className="text-red-500 text-lg">{error}</p>}

        {weatherData && <WeatherCard weather={weatherData} />}
      </main>

      <Footer />
    </div>
  );
}

export default MainApp;
