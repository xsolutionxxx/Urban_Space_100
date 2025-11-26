import { Heart } from "lucide-react";

import { useWishlist } from "@features/wishlist/useWishlist";
import ProductSwiper from "./productSwiper/ProductSwiper";

function ProductVertical({
  id,
  images,
  brand,
  category,
  title,
  description,
  price,
  currency,
}) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const liked = isInWishlist(id);

  const imagesArray = Array.isArray(images) ? images : [images];

  return (
    <div className="p-4 md:p-5 lg:p-6 bg-primary rounded-2xl shadow-lg">
      {imagesArray.length > 1 ? (
      <ProductSwiper images={imagesArray} title={title} />
    ) : (
      <img
        src={imagesArray[0]}
        alt={title}
        className="mb-2 md:mb-3 lg:mb-4 aspect-6/5 w-full rounded-2xl object-cover"
      />
    )}
      <span className="text-xs xs:text-[13px] md:text-sm leading-snug text-text-sub capitalize">
        {brand.toUpperCase()}, {category}
      </span>
      <h2 className="mb-1 xs:mb-2 font-bold text-lg md:text-xl lg:text-2xl leading-tight md:leading-snug">
        {title}
      </h2>
      <p className="mb-2 sm:text-base lg:text-lg leading-snug">{description}</p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg xs:text-xl">
          {price} {currency}
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
              currency,
            })
          }
          className="lg:cursor-pointer"
        >
          <Heart strokeWidth={1.5} size={28} fill={liked ? "red" : "none"} />
        </button>
      </div>
    </div>
  );
}

export default ProductVertical;
