import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Modal from '../utils/Modal';

import HeroImage from '../images/hero-image-01.jpg';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="px-4 md:px-16 lg:px-36">
      <div className="max-w-6xl relative">
        {/* Hero content */}
        <div className="relative pt-32 pb-5 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-2xl pb-0 md:pb-16">
            <h1 className="h1 mb-8 text-7xl text-[#141029CC] tracking-wide hero-title-font" data-aos="fade-up">
              Twin Protocol
            </h1>
            <p className="text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="200">
              Decentralized Synthetic Assets. Trade Stocks, Commodities, ETFs On Arbitrum - Accessible To All.
            </p>
            <p className="text-gray-600 mb-4" data-aos="fade-up" data-aos-delay="200">
              Twin Protocol — DeFi protocol that enables Twin Assets (twAssets): synthetic assets that give traders exposure to real-world assets (RWA) by reflecting their price activity on-chain. We take the best that DeFi has to offer and pair it with real-world asset (e.g. synthetic gold) exposure on Arbitrum.
            </p>
            <div className="flex flex-col-reverse items-left md:flex-row md:items-center mt-12 md:mt-20">
              <a className="btn-twin w-full text-white text-center font-semibold p-6 px-8 mb-4 mr-6 sm:w-auto sm:mb-0" href="#0"  data-aos="fade-up" data-aos-delay="400">
                Get $TWIN token
              </a>
              <Link to="#" className="block mb-6 md:mb-0" aria-label="Cruip" data-aos="fade-up" data-aos-delay="600">
                Be sure not to be late!
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div>
            {/* <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
              <img className="mx-auto" src={HeroImage} width="1024" height="504" alt="Hero" />
              <a
                className="absolute group"
                href="#0"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setVideoModalOpen(true);
                }}
                aria-controls="modal"
              >
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 hover:opacity-75 transition duration-150 ease-in-out"
                  viewBox="0 0 88 88"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient x1="78.169%" y1="9.507%" x2="24.434%" y2="90.469%" id="a">
                      <stop stopColor="#EBF1F5" stopOpacity=".8" offset="0%" />
                      <stop stopColor="#EBF1F5" offset="100%" />
                    </linearGradient>
                  </defs>
                  <circle fill="url(#a)" cx="44" cy="44" r="44" />
                  <path
                    className="fill-current text-purple-600"
                    d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z"
                  />
                </svg>
              </a>
            </div> */}

            {/* Modal */}
            <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
