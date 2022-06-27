import { ApiContextProvider } from "./context/ApiContext";
import { CurrentWeather } from "./components/CurrentWeather";
import { ListDays } from "./components/ListDays";
import { NextHours } from "./components/NextHours";
import { Map } from "./components/Map";
import { LocalHour } from "./components/LocalHour";

function App() {
  return (
    <ApiContextProvider>
      <div className="App">
        <CurrentWeather />
        <ListDays />
        <NextHours />
        <Map />
        <LocalHour />
      </div>
    </ApiContextProvider>
  );
}

export default App;
