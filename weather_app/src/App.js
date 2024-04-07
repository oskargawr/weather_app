import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Nav from './components/Nav.js';
import CurrentWeather from './components/current-city/currentWeather.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <CurrentWeather />
    </div>
  );
}

export default App;
