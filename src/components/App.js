import "./App.css";
import Weather from "./weather/Weather";
import Weathernav from "./Nav/WeatherNav";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Weathernav />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
