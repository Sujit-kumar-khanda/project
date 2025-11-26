import ReactAnimatedWeather from "react-animated-weather";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const { name } = weather;
  const { country } = weather.sys;
  const { temp, feels_like, humidity, pressure } = weather.main;
  const { main, description } = weather.weather[0];

  //  Animated Icon Mapping
  const getAnimatedIcon = (main) => {
    const map = {
      Thunderstorm: "SLEET",
      Drizzle: "RAIN",
      Rain: "RAIN",
      Snow: "SNOW",
      Mist: "FOG",
      Smoke: "FOG",
      Haze: "FOG",
      Dust: "FOG",
      Fog: "FOG",
      Sand: "FOG",
      Ash: "FOG",
      Squall: "WIND",
      Tornado: "WIND",
      Clear: "CLEAR_DAY",
      Clouds: "CLOUDY",
    };

    return map[main] || "CLOUDY";
  };

  return (
    <div
      className="
      w-full max-w-md 
      bg-white/10 backdrop-blur-xl 
      rounded-2xl p-6 
      shadow-lg border border-white/20 
      transition-all hover:shadow-blue-500/30
    "
    >
      {/* City Name */}
      <h2 className="text-3xl font-bold text-center mb-2 text-white drop-shadow">
        {name}, {country}
      </h2>

      {/*  Animated Weather Icon */}
      <div className="flex justify-center mb-2">
        <ReactAnimatedWeather
          icon={getAnimatedIcon(main)}
          color="white"
          size={90}
          animate={true}
        />
      </div>

      {/* Temperature */}
      <h1 className="text-6xl font-extrabold text-center bg-linear-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
        {Math.round(temp)}°C
      </h1>

      {/* Weather Description */}
      <p className="text-center text-gray-200 capitalize mt-3 tracking-wide">
        {description}
      </p>

      {/* Extra info */}
      <div className="mt-6 grid grid-cols-2 gap-4 text-gray-200 text-sm">
        <div className="flex justify-between bg-white/5 p-3 rounded-xl border border-white/10">
          <span>Feels Like:</span>
          <span className="font-semibold">{Math.round(feels_like)}°C</span>
        </div>

        <div className="flex justify-between bg-white/5 p-3 rounded-xl border border-white/10">
          <span>Humidity:</span>
          <span className="font-semibold">{humidity}%</span>
        </div>

        <div className="flex justify-between bg-white/5 p-3 rounded-xl border border-white/10">
          <span>Pressure:</span>
          <span className="font-semibold">{pressure} hPa</span>
        </div>

        <div className="flex justify-between bg-white/5 p-3 rounded-xl border border-white/10">
          <span>Condition:</span>
          <span className="font-semibold">{main}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
