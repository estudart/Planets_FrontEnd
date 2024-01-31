import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(function () {
    const planetsData = axios.get("http://127.0.0.1:5000/planets");
    console.log(planetsData);
  }, []);
  return (
    <div>
      <h1 className="app-title">Solar System</h1>
      <PlanetCard />
    </div>
  );
}

function PlanetCard() {
  return (
    <div className="planet-container">
      <img alt="Planet URL" />
      <div></div>
    </div>
  );
}

export default App;
