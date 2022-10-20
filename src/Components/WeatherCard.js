import React from "react";
import { FaTimes } from "react-icons/fa";
function WeatherCard({ data, deleteCard }) {
  return (
    <div>
      <section
        // className="vh-75"
        style={{
          backgroundColor: "#41b3a3",
          fontWeight: "bolder",
          margin: "1rem",
        }}
      >
        <div>
          <div>
            <div
              className="card"
              style={{
                color: "#d3e6db",
                borderRadius: "25px",
                backgroundColor: "#254e58",
              }}
            >
              <div className="d-flex flex-row-reverse">
                <span className="p-2" style={{ color: "#d3e6db" }}>
                  <button
                    className="flex-direction-end"
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      color: "#d3e6db",
                    }}
                    onClick={() => {
                      deleteCard(data.location.lat);
                    }}
                  >
                    <FaTimes />
                  </button>
                </span>
              </div>
              <div className="card-body p-4">
                <div className="d-flex">
                  <h2 className="flex-grow-1">{data.location.name}</h2>
                  <h6>{data.location.localtime}</h6>
                </div>

                <div className="d-flex flex-column text-center mt-5 mb-4">
                  <h6
                    className="display-4 mb-0 font-weight-bold"
                    style={{ color: "#d3e6db" }}
                  >
                    {data.current.temperature}°<sup>c</sup>
                  </h6>
                  <span className="small" style={{ color: "#d3e6db" }}>
                    {data.current.weather_descriptions[0]}
                  </span>
                </div>

                <div className="d-flex align-items-center">
                  <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                    <div>
                      <span className="ms-1" style={{ color: "#d3e6db" }}>
                        Wind Speed : {data.current.wind_speed} kmph
                      </span>
                    </div>
                    <div>
                      <span className="ms-1" style={{ color: "#d3e6db" }}>
                        Humidity : {data.current.humidity}%
                      </span>
                    </div>
                    <div>
                      <span className="ms-1" style={{ color: "#d3e6db" }}>
                        Feels like : {data.current.feelslike}°<sup>c</sup>
                      </span>
                    </div>
                  </div>
                  <div>
                    <img
                      src={data.current.weather_icons[0]}
                      width="100px"
                      style={{ borderRadius: "50%", opacity: "1" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WeatherCard;
