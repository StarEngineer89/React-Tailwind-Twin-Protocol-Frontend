import React from 'react';

// effects
import PageIllustration from '../partials/PageIllustration';

// sections
import HeroApp from '../partials/apps/HeroApp';

// layouts
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import ContractContextProvider from '../context/ContractContext';

function Home() {
  return (
  <ContractContextProvider>
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-h-full mx-auto pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroApp />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
    </ContractContextProvider>
  );
}

export default Home;