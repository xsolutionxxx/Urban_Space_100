import { HeartOff, Undo } from "lucide-react";

import { useWishlist } from "../hooks/useWishlist";

function ProductWishlist({
  id,
  image,
  brand,
  category,
  title,
  price,
  currency,
}) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const liked = isInWishlist(id);

  return (
    <div className="relative p-3 md:p-4 lg:p-5 flex gap-2.5 xs:gap-3 2xs:gap-4 3xs:gap-4.5 bg-primary rounded-2xl shadow-lg">
      <button className="absolute top-1.5 right-2 rotate-150 lg:cursor-pointer">
        <Undo strokeWidth={1.5} size={22} />
      </button>
      <img
        src={image}
        alt={title}
        className="aspect-square w-20 xs:w-[100px] lg:w-[120px] rounded-2xl object-cover"
      />
      <div className="w-full flex flex-col justify-between gap-3">
        <div>
          <span className="text-xs xs:text-[13px] md:text-sm leading-snug text-text-sub capitalize">
            {brand.toUpperCase()}, {category}
          </span>
          <h2 className="font-bold text-lg md:text-xl lg:text-2xl leading-tight md:leading-snug">
            {title}
          </h2>
        </div>
        <div className="flex justify-between">
          <span className="font-bold text-lg xs:text-xl">
            {price} {currency}
          </span>
          <button
            onClick={() =>
              toggleWishlist({
                id,
              })
            }
            className="flex items-end gap-1 font-medium text-sm cursor-pointer"
          >
            <HeartOff
              strokeWidth={1.5}
              size={28}
              fill={liked ? "red" : "none"}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductWishlist;
