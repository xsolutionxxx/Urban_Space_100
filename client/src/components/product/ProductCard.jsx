import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

import { useWishlist } from "@features/wishlist/useWishlist";

import ProductSwiper from "./productSwiper/ProductSwiper";
import ImageWithLoader from "@components/ui/ImageWithLoader";

function ProductCard({
  id,
  images,
  brand,
  category,
  title,
  description,
  price,
}) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const liked = isInWishlist(id);

  const rawImages = Array.isArray(images) ? images : [images];

  return (
    <div className="relative bg-primary rounded-2xl text-center shadow-lg">
      <div className="absolute top-0 p-3 pb-6 w-full rounded-t-2xl bg-linear-to-b from-black to-transparent flex items-start justify-between gap-2 z-30 pointer-events-none">
        <span className="text-xs 2xs:text-[13px] md:text-sm leading-snug text-text-sub text-start capitalize">
          {brand.toUpperCase()}, {category}
        </span>
        <button
          onClick={() =>
            toggleWishlist({
              id,
              images,
              brand,
              category,
              title,
              description,
              price,
            })
          }
          className="p-1.5 rounded-full bg-secondary pointer-events-auto lg:cursor-pointer"
        >
          <Heart strokeWidth={1.5} size={20} fill={liked ? "red" : "none"} />
        </button>
      </div>

      <Link to={`/product/${id}`} className="block h-full">
        {rawImages.length > 1 ? (
          <ProductSwiper images={rawImages} title={title} />
        ) : (
          <ImageWithLoader
            src={rawImages[0]}
            alt={title}
            className="aspect-5/6 rounded-t-2xl"
          />
        )}
        <div className="p-2.5 flex flex-col gap-1.5">
          <span className="font-bold text-base xs:text-xl">{price} грн</span>
          <h2 className="font-medium text-sm md:text-xl lg:text-2xl leading-tight md:leading-snug uppercase">
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
