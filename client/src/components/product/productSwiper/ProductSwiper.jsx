import { useLocation, matchPath } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useLayout } from "@features/layout/useLayout.js";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./productSwiper.css";

export default function ProductSwiper({ images = [], title }) {
  const location = useLocation();
  const isProductPage = !!matchPath("/product/:id", location.pathname);

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
        modules={[Navigation, Pagination]}
        className={`relative overflow-hidden ${isProductPage ? "" : "rounded-t-2xl"}`}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`${title} ${i + 1}`}
              className={`w-full h-full object-cover ${
                layout === "show-col-1" ? "aspect-5/6" : "aspect-5/6"
              }`}
              loading="lazy"
            />
          </SwiperSlide>
        ))}

        <div className="pswiper-pagination" />
        <div className="absolute bottom-0 w-full h-15 bg-linear-to-t from-black/75 to-transparent z-10" />

        {isProductPage && (
          <>
            <button
              aria-label="Previous slide"
              className="pswiper-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/90 shadow-md hover:scale-105 transition-transform"
            >
              <ChevronLeft size={18} strokeWidth={2} color="black" />
            </button>

            <button
              aria-label="Next slide"
              className="pswiper-next absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/90 shadow-md hover:scale-105 transition-transform"
            >
              <ChevronRight size={18} strokeWidth={2} color="black" />
            </button>
          </>
        )}
      </Swiper>
    </div>
  );
}
