import React from "react";
import { Link } from "react-router-dom";

import Logo from "../components/Logo";

function Footer() {
  return (
    <footer className="bg-gray-300 z-10">
      <div className="py-3 md:py-4">
        <div className="flex justify-between mx-auto px-4 md:px-16 lg:px-36">
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <div className="flex items-center">
              <Logo />
              <span className="ml-1 text-2xl mt-1">Twin Protocol</span>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <Link to="#" className="block" aria-label="Cruip">
              App
            </Link>
            <Link to="#" className="block" aria-label="Cruip">
              Documents
            </Link>
          </div>

          <div className="flex items-center space-x-5">
            <Link to="#" className="block" aria-label="Cruip">
              <img src="/images/social-twitter.png" alt="social-twitter" />
            </Link>
            <Link to="#" className="block" aria-label="Cruip">
              <img src="/images/social-telegram.png" alt="social-telegram" />
            </Link>
          </div>

          <div className="flex items-center space-x-1">
            <span>made by</span>
            <Link to="#" className="block" aria-label="Cruip">
              roobinium.io
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
