import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function WishlistHeader({ count = 0, onClear }) {
  return (
    <div className="flex flex-col gap-3">
      <Link
        to="/"
        className="w-max flex items-center gap-1 text-xs text-text-main/50"
      >
        <ArrowLeft strokeWidth={2} size={12} />
        Крамничка
      </Link>
      <h2 className="font-bold text-2xl md:text-2xl lg:text-3xl leading-tight md:leading-snug uppercase">
        Мої вподобайки
      </h2>
      <div className="w-full flex justify-between items-end">
        <h2 className="font-medium text-base text-text-main/75 capitalize">
          Всього закладок: {count}
        </h2>
        <button
          onClick={onClear}
          className="px-1.75 py-1.25 bg-accent border rounded-xs text-[8px] tracking-widest uppercase"
          aria-label="Очистити список улюблених"
        >
          Очистити все
        </button>
      </div>
    </div>
  );
}

export default WishlistHeader;
