import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("Neptune");

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get("http://127.0.0.1:5000/planets");
        const planetsData = result.data;
        setData(planetsData);
        console.log(planetsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  function handleSelected(select) {
    setSelected(select);
  }

  return (
    <div className="App">
      <h1 className="app-title">Solar System</h1>
      <PlanetCard planets={data} selected={selected} />
      <MiniCards planets={data} handleSelected={handleSelected} />
    </div>
  );
}

function PlanetCard({ planets, selected }) {
  if (!planets || planets.length === 0) {
    return <div>No planets available</div>;
  }

  if (!planets[0] || !planets[0].image) {
    return <div>no planets image</div>;
  }

  return (
    <div className="planet-container">
      <img
        className="planet-container__img"
        src={planets.find((planet) => planet.planet_name === selected).image}
        alt="Planet URL"
      />
    </div>
  );
}

function MiniCards({ planets, handleSelected }) {
  if (!planets || planets.length === 0) {
    return <div>No planets available</div>;
  }
  return (
    <div className="minicards">
      {planets.map((planet) => (
        <div className="minicards-container">
          <p
            className="minicards-container__title"
            onClick={() => handleSelected(planet.planet_name)}
          >
            {planet.planet_name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
