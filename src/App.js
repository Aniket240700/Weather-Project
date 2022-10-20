import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./Components/WeatherCard";
import AddWeather from "./Components/AddWeather";
import Welcome from "./Components/Welcome";
import { v4 as uuidv4 } from "uuid";
import WeatherIcons from "./Components/WeatherIcons";

function App() {
  const [data, setData] = useState([]);
  const [searching, setSearching] = useState("");
  const [fetched, setFetched] = useState(true);
  let url = `http://api.weatherstack.com/current?access_key=46cc6dac0a6d85a637f8ada125048701&query=${searching}`;
  async function fetching() {
    let res = await fetch(url);
    let response = await res.json();
    if (response.success === false) {
      setFetched(false);
    } else {
      let newArr = [...data, response];
      setFetched(true);
      setData(newArr);
    }
  }

  useEffect(() => {
    fetching();
  }, [searching]);

  function search(city) {
    setSearching(city);
  }

  function removeCard(lat) {
    let newArr = data.filter((item) => item.location.lat !== lat);
    setData(newArr);
  }
  return (
    <>
      {data.length <= 0 ? (
        <>
          <Welcome />
          <AddWeather city={search} />
          <WeatherIcons />
        </>
      ) : !fetched ? (
        <h1>Not found</h1>
      ) : (
        <div>
          <AddWeather city={search} />
          <div className="cards">
            {data.map((item) => (
              <div>
                <WeatherCard
                  key={uuidv4()}
                  data={item}
                  deleteCard={removeCard}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default App;