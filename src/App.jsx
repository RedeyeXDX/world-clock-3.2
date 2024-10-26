import logo from "/logo.png";
import "./App.css";
import Clock from "./clock.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <div>
        <img src={logo} className="logo" alt="Rocket logo" />
      </div>
          <h1>WORLD CLOCK</h1> 
          <Clock city="Singapore" timeZone="Singapore"/>
          <Clock city="Japan" timeZone="Japan"/> 
          <Clock city="Los Angeles" timeZone="America/Los_Angeles"/>
    </div>

  );
}

export default App;