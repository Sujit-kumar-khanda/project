import "./App.css";

import { WeatherProvider } from "./store/weatherContext";

import MainApp from "./MainApp";

function App() {
  return (
    <WeatherProvider>
      <MainApp />
    </WeatherProvider>
  );
}

export default App;
