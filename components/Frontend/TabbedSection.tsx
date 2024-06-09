import React from "react";
import TabbedItems from "./TabbedItems";

const TabbedSection = () => {
  return (
    <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-5xl text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px]">
                Qualified Tutors.
              </h2>
              <p className="text-base text-body-color ">
              Semua guru kami adalah profesional berpengalaman di bidangnya, siap membantu Anda memahami materi pelajaran dengan lebih baik dan mencapai tujuan akademis Anda.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl">
        <TabbedItems/>
        </div>
        
      </div>
    </section>
  );
};

export default TabbedSection;

