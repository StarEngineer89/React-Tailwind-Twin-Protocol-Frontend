import React from "react";
import { Link } from "react-router-dom";

function Logo({ ...other }) {
  return (
    <Link to="/" className="block" aria-label="Cruip">
      <img src="/images/logo.png" alt="logo" className="w-[40px]" {...other} />
    </Link>
  );
}

export default Logo;
