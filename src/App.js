import "./App.css";
import WeatherApp from "./components/WeatherApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherShow from "./components/WeatherShow";
function App() {
  return (
    <div className="App">
      {/* <WeatherApp /> */}
      <Router>
        <Routes>
          <Route path="/" element={<WeatherApp />} />
          <Route path="weathershow" element={<WeatherShow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
