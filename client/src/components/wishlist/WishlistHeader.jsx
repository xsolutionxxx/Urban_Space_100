import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function WishlistHeader() {
  return (
    <div className="flex flex-col gap-3">
      <Link to="/" className="w-max flex items-center gap-1 text-text-main/50">
        <ArrowLeft strokeWidth={2} size={12} />
        Крамничка
      </Link>
      <h2 className="font-bold text-2xl md:text-2xl lg:text-3xl leading-tight md:leading-snug uppercase">
        Мої вподобайки
      </h2>
    </div>
  );
}

export default WishlistHeader;
