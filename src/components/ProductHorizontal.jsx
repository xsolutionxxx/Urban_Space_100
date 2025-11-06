import { Heart, HeartOff, ExternalLink } from "lucide-react";

import { useWishlist } from "../hooks/useWishlist";

function ProductHorizontal({
  id,
  image,
  brand,
  category,
  title,
  description,
  price,
  currency,
}) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const liked = isInWishlist(id);

  return (
    <div className="p-3 md:p-4 lg:p-5 flex gap-2.5 xs:gap-3 2xs:gap-4 3xs:gap-4.5 bg-primary rounded-2xl shadow-lg">
      <img
        src={image}
        alt={title}
        className="aspect-3/4 w-[120px] xs:w-[140px] sm:w-[200px] sm:aspect-square rounded-2xl object-cover"
      />
      <div className="w-full flex flex-col justify-between gap-3">
        <div>
          <span className="text-xs xs:text-[13px] md:text-sm leading-snug text-text-sub capitalize">
            {brand.toUpperCase()}, {category}
          </span>
          <h2 className="font-bold text-lg md:text-xl lg:text-2xl leading-tight md:leading-snug">
            {title}
          </h2>
          <p className="sm:text-base lg:text-lg leading-snug">{description}</p>
        </div>
        {/* <button className="flex justify-start items-center gap-1 text- font-medium xs:text-base lg:text-lg leading-snug">
          Більше
          <ExternalLink strokeWidth={1.5} size={12} />
        </button> */}
        <div className="flex justify-between">
          <span className="font-bold text-lg xs:text-xl">
            {price} {currency}
          </span>
          <button
            onClick={() =>
              toggleWishlist({
                id,
                image,
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
    </div>
  );
}

export default ProductHorizontal;
