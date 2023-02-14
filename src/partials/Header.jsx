import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// components
import Logo from '../components/Logo';

function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <div className="flex items-center">
              <Logo />
              <span className="ml-1 text-2xl mt-1">Twin Protocol</span>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link to="/app" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  App
                </Link>
              </li>
              <li>
                <Link to="/documents" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">Documents</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">Twitter</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">Telegram</Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">

            {/* Hamburger button */}
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav id="mobile-nav" ref={mobileNav} className="fixed top-0 z-20 right-0 w-[250px] h-full bg-slate-50 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxWidth: 250, opacity: 1 } : { maxWidth: 0, opacity: .8 } }>
              <ul className="px-4 py-2 h-full">
                <li>
                  <Link to="/app" className="flex text-gray-300 hover:text-gray-200 py-2">App</Link>
                </li>
                <li>
                  <Link to="/documents" className="flex text-gray-300 hover:text-gray-200 py-2">Documents</Link>
                </li>
                <li>
                  <Link to="#" className="flex text-gray-300 hover:text-gray-200 py-2">Twitter</Link>
                </li>
                <li>
                  <Link to="#" className="flex text-gray-300 hover:text-gray-200 py-2">Telegram</Link>
                </li>
              </ul>
            </nav>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
