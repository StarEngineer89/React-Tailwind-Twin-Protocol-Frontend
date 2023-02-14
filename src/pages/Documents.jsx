import React from 'react';

// effects
import PageIllustration from '../partials/PageIllustration';

// sections
import HeroDocuments from '../partials/documents/HeroDocuments';

// layouts
import Header from '../partials/Header';
import Footer from '../partials/Footer';

function Documents() {
  return (
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
        <HeroDocuments />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Documents;