import { useContext } from "react";
import { weatherContext } from "../store/weatherContext";

const Navbar = () => {
  const { setCity, setCoords } = useContext(weatherContext);

  const handleInput = (e) => {
    if (e.key === "Enter") {
      setCoords(null); // stop GPS mode
      setCity(e.target.value.trim());
      e.target.value = "";
    }
  };

  const handleLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation Not Supported!");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        setCoords({ lat: latitude, lon: longitude });
        setCity(""); // clear city so GPS takes priority
      },
      () => alert("Unable to get your location")
    );
  };

  return (
    <nav className="w-full bg-gray-900 shadow px-4 py-3">
      <div className="max-w-6xl mx-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 flex justify-center sm:justify-start">
          🌦️ WeatherX
        </div>

        {/* Search + Location */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
          {/* Search Bar */}
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm w-full sm:w-72">
            <input
              type="text"
              placeholder="Search for city..."
              className="w-full bg-transparent outline-none text-gray-300 placeholder-gray-400 text-sm"
              onKeyDown={handleInput}
            />
            <span className="text-gray-500">🔍</span>
          </div>

          {/* 📍 Use My Location Button */}
          <button
            onClick={handleLocation}
            className="px-3 py-1 rounded-full
             bg-white/10 backdrop-blur-md 
             border border-white/20 
             text-white 
             hover:bg-white/20 transition"
          >
            📍 My Location
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
