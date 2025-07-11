"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const partners = [
  {
    name: "FedEx",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/FedEx_Express.svg",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Dropbox",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Dropbox_logo_2017.svg",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
];

export default function PartnerCarousel() {
  return (
    <div className="relative w-full bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 py-[100px]">
      <Swiper
        modules={[Navigation, Autoplay, EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: false,
        }}
        grabCursor
        centeredSlides
        slidesPerView={5}
        spaceBetween={-60}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          prevEl: ".partner-prev",
          nextEl: ".partner-next",
        }}
        className="!px-16"
      >
        {partners.map((partner, i) => (
          <SwiperSlide key={i} className="flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl w-64 h-40 flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-20 max-w-48 object-contain px-6"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className=" md:block hidden absolute left-8 top-1/2 -translate-y-1/2 text-white text-4xl z-10 partner-prev hover:text-gray-200 transition-colors">
        ←
      </button>
      <button className="md:block hidden absolute right-8 top-1/2 -translate-y-1/2 text-white text-4xl z-10 partner-next hover:text-gray-200 transition-colors">
        →
      </button>
    </div>
  );
}
