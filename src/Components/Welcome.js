import React from "react";

export default function Welcome() {
  return (
    <div>
      <header
        className="masthead text-white text-center"
        style={{ height: "6rem", backgroundColor: "#2c3e50" }}
      >
        <div className="container d-flex align-items-center flex-column">
          <h1 className="masthead-heading text-uppercase mb-0">Weather App</h1>
        </div>
      </header>
    </div>
  );
}
