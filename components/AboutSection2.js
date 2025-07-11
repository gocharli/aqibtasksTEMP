import Image from "next/image";
import React from "react";

const AboutUsSection2 = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Content Column */}

          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 rounded-md">
              History of <span className="text-orange-500">JustStay</span>
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 font-bold rounded-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque assumenda incidunt id cum. Fugiat repellat cumque
              delectus, at ipsum ad lure explicabo, perferendis. If you're still
              reading this, congrats, you're officially a masochist.
            </p>
            <p className="text-gray-700 leading-relaxed rounded-md">
              Autem temporibus, neque voluptas officiis molestiae. At vera eos
              et accusamus et iusto odio dignissimos ducimus. But hey, at least
              you're not stuck in traffic, or worse, listening to a never-ending
              sales pitch, right?
            </p>
          </div>

          {/* Image Column */}

          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
              alt="Luxurious Hotel Interior"
              width={1200} // REQUIRED!
              height={800} // REQUIRED!
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection2;
