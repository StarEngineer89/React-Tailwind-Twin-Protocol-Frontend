import React from 'react';

// components
import Accordion from '../../components/Accordion';

function HeroDocuments() {

  return (
    <section className="px-4 md:px-16 lg:px-36">
      <div className="max-w-6xl relative">
        {/* Hero content */}
        <div className="relative pt-32 pb-5 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-2xl pb-0 md:pb-16">
            <p className="mb-8 text-4xl text-[#141029CC] font-extrabold" data-aos="fade-up">
              Documents
            </p>
            <p className="text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="200">
              The exclusive license nondeterministically provides a civil-law household contract. The insurance policy legitimately proves the guarantee law. The deductible is a criminal fine.
            </p>
            <p className="text-gray-600 mb-4" data-aos="fade-up" data-aos-delay="200">
              Movable property, given the absence of norms in the law on this issue, is untenable. In the most general case, the norm certainly insures the bill, which has no analogues in the Anglo-Saxon legal system. Acceptance exports criminal commodity credit. The sum insured is protected. The recourse requirement is licensed by the subsidiary law. The brand name, despite external influences, is an international easement.
            </p>
            <p className="text-gray-600 mb-4" data-aos="fade-up" data-aos-delay="200">
              From the comments of experts analyzing the bill, it is not always possible to determine when exactly the intent is required by the guarantor when it comes to the responsibility of a legal entity. Municipal property is legitimate. Netting, in the first approximation, uncontrollably obliges the bill of lading, excluding the principle of presumption of innocence. The fine provides an illegal Code, excluding the principle of presumption of innocence.
            </p>
          </div>

          {/* FAQ */}
          <p className="text-2xl font-extrabold mb-4">FAQ</p>
          <Accordion panels={panels} />
        </div>
      </div>
    </section>
  );
}

export default HeroDocuments;


const panels = [
  {
    label: "What is it?",
    content:
      'Netting, in the first approximation, uncontrollably obliges the bill of lading, excluding the principle of presumption of innocence.',
  },
  {
    label: "Is it safe?",
    content:
      'Netting, in the first approximation, uncontrollably obliges the bill of lading, excluding the principle of presumption of innocence.',
  },
  {
    label: "Is it free?",
    content:
      'Netting, in the first approximation, uncontrollably obliges the bill of lading, excluding the principle of presumption of innocence.',
  },
  {
    label: "How does it work?",
    content:
      "Netting, in the first approximation, uncontrollably obliges the bill of lading, excluding the principle of presumption of innocence.",
  },
  {
    label: "What will I get?",
    content:
      "SVG is awesome for icons! It's a vector image format with optional support for CSS, JavaScript, reusability, accessibility and a bunch more. It was made for this sort of thing.",
  },
];