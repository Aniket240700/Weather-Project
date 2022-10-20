import React from "react";
import loading from "../images/page-not-found-688965_1280.png";
// import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* <Link to='/'> */}
            <img
              src={loading}
              className="img-responsive center-block d-block mx-auto"
              alt="404-Not-Found"
            />
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
