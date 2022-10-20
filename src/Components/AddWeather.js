import React, { useState } from "react";

// import './Form.css'

export default function AddWeather(props) {
  const [searching, setSearching] = useState("Enter Location...");

  return (
    <form>
      <div
        className="form-group"
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <input
          type="text"
          className="form-control"
          value={searching}
          onFocus={()=>setSearching("")}
          onChange={(e) => setSearching(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              props.city(searching);
              setSearching('')
            }
          }}
          style={{
            width: "20vw",
            backgroundColor: "#254e58",
            border: "none",
            borderBottom: "2px solid #d3e6db",
            color: "white",
          }}
        />
      </div>
    </form>
  );
}
