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
      <div className="planet-container__info">
        <table>
          <tbody>
            <tr>
              <td className="full-width" colSpan="2">
                Description
              </td>
            </tr>
            <tr>
              <td className="full-width justify" colSpan="2">
                {
                  planets.find((planet) => planet.planet_name === selected)
                    .description
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <img
        className="planet-container__img"
        src={planets.find((planet) => planet.planet_name === selected).image}
        alt="Planet URL"
      />

      <div className="planet-container__info">
        <table>
          <tbody>
            <tr>
              <td className="label">Name:</td>
              <td className="value">
                {
                  planets.find((planet) => planet.planet_name === selected)
                    .planet_name
                }
              </td>
            </tr>
            <tr>
              <td className="label">Type:</td>
              <td className="value">
                {
                  planets.find((planet) => planet.planet_name === selected)
                    .planet_type
                }
              </td>
            </tr>
            <tr>
              <td className="label">Home Star:</td>
              <td className="value">
                {
                  planets.find((planet) => planet.planet_name === selected)
                    .home_star
                }
              </td>
            </tr>
            <tr>
              <td className="label">Mass:</td>
              <td className="value">
                {planets.find((planet) => planet.planet_name === selected).mass}{" "}
                M Earth
              </td>
            </tr>
            <tr>
              <td className="label">Radius:</td>
              <td className="value">
                {
                  planets.find((planet) => planet.planet_name === selected)
                    .radius
                }{" "}
                Km
              </td>
            </tr>
            <tr>
              <td className="label">Distance:</td>
              <td className="value">
                {
                  planets.find((planet) => planet.planet_name === selected)
                    .distance
                }{" "}
                (AU)
              </td>
            </tr>
            {/*
            <tr>
              <td className="full-width" colSpan="2">
                Description
              </td>
            </tr>
            */}
          </tbody>
        </table>
      </div>
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
