import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <Link to="/" className="block" aria-label="Cruip">
      <img src="/images/logo.png" alt="logo" className="logo-icon" />
    </Link>
  );
}

export default Banner;
