import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCreative } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useLayout } from "@features/layout/useLayout.js";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-creative';

import "./productSwiper.css";

export default function ProductSwiper({ images = [], title }) {
  const { layout } = useLayout();

  if (!Array.isArray(images) || images.length === 0) return null;

  return (
    <div>
      <Swiper
        navigation={{
          nextEl: ".pswiper-next",
          prevEl: ".pswiper-prev",
        }}
        pagination={{ clickable: true, el: ".pswiper-pagination" }}
        modules={[Navigation, Pagination, EffectCreative]}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        className={`relative rounded-2xl overflow-hidden ${layout === "vertical" ? `mb-2 md:mb-3 lg:mb-4` : `w-[120px] xs:w-[140px] sm:w-[200px] h-full`}`}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`${title} ${i + 1}`}
              className={`object-cover ${layout === "vertical" ? `aspect-6/5` : `h-full aspect-3/4 sm:aspect-square`}`}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
        
        <div className="pswiper-pagination" />
        <div className="absolute bottom-0 w-full h-15 rounded-b-2xl bg-linear-to-t from-black/75 to-transparent z-10" />

        <button
          aria-label="Previous slide"
          className="pswiper-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/90 shadow-md hover:scale-105 transition-transform"
        >
          <ChevronLeft size={18} strokeWidth={2} color="black" />
        </button>

        <button
          aria-label="Next slide"
          className="pswiper-next absolute right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/90 shadow-md hover:scale-105 transition-transform"
        >
          <ChevronRight size={18} strokeWidth={2} color="black" />
        </button>
      </Swiper>
    </div>
  );
}
