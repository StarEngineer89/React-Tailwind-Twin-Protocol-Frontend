import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// components
import Logo from '../components/Logo';

function Header() {
  const { pathname } = useLocation();

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  const isMatched = (path) => pathname === path;

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
      <div className="max-w-full mx-auto px-4 md:px-16 lg:px-36">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 mr-4">
            <div className="flex items-center">
              <Logo />
              <span className="ml-1 text-2xl mt-1 font-bold">Twin Protocol</span>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex space-x-8 grow justify-end flex-wrap items-center">
              {NAV_ITEMS.map((item, idx) => ((
                <li className="flex items-center" key={idx}>
                  <img src={item.icon} alt="nav-item" />
                  <Link to={item.link} className={`${isMatched(item.link) && 'text-[#9c9c9c]'} hover:text-gray-500 px-3 py-2 flex items-center transition duration-150 ease-in-out`}>
                    {item.title}
                  </Link>
                </li>
              )))}
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">

            {/* Hamburger button */}
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active fixed'} top-7 right-6`} style={{ zIndex: 21 }} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-800 hover:text-gray-600 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav id="mobile-nav" ref={mobileNav} className="fixed top-0 z-20 right-0 w-[250px] h-full  flex items-center bg-slate-50 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxWidth: 180, opacity: 0.95 } : { maxWidth: 0, opacity: .8 } }>
              <ul className="px-4 py-2">
                {NAV_ITEMS.map((item, idx) => ((
                  <li className="flex items-center mb-6" key={idx}>
                    <img src={item.icon} alt="nav-item" />
                    <Link to={item.link} className="text-gray-800 hover:text-gray-500 px-3 py-2 flex items-center transition duration-150 ease-in-out">
                      {item.title}
                    </Link>
                  </li>
                )))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

const NAV_ITEMS = [
  {
    icon: '/images/nav-app.png',
    title: 'App',
    link: '/apps'
  },
  {
    icon: '/images/nav-document.png',
    title: 'Documents',
    link: '/documents'
  },
  {
    icon: '/images/nav-twitter.png',
    title: 'Twitter',
    link: '#'
  },
  {
    icon: '/images/nav-telegram.png',
    title: 'Telegram',
    link: '#'
  }
]