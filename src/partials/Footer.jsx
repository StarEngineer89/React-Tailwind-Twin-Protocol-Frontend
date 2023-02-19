import React from "react";
import { Link } from "react-router-dom";

import Logo from "../components/Logo";

function Footer() {
  return (
    <footer className="bg-gray-200 opacity-80 z-10">
      <div className="py-3 md:py-4">
        <div className="grid grid-cols-2 md:grid-cols-4  gap-3 mx-auto px-4 md:px-16 lg:px-36">
          <div className="flex items-center">
            <Logo className="w-[30px]" />
            <span className="ml-1 font-bold">Twin Protocol</span>
          </div>

          {/* <div className="flex items-center space-x-5 order-3 md:order-2">
            <Link to="/apps" className="block" aria-label="Cruip">
              App
            </Link>
            <Link to="/documents" className="block" aria-label="Cruip">
              Documents
            </Link>
          </div> */}

          <div className="flex items-center justify-end md:justify-start space-x-5 order-2 md:order-3">
            <Link to="https://twitter.com/Twinprotocolxyz" className="block" aria-label="Cruip">
              <img src="/images/social-twitter.png" alt="social-twitter" />
            </Link>
            <Link to="https://t.me/Twinprotocolxyz" className="block" aria-label="Cruip">
              <img src="/images/social-telegram.png" alt="social-telegram" />
            </Link>
          </div>

          {/* <div className="flex items-center justify-end md:justify-start space-x-1 order-4">
            <span>made by</span>
            <Link to="#" className="block font-bold underline" aria-label="Cruip">
              roobinium.io
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
