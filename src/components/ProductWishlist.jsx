import { HeartOff } from "lucide-react";

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
    <div className="p-[15px] flex gap-[15px] bg-primary rounded-2xl shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-2/6 h-[120px] rounded-2xl object-cover"
      />
      <div className="w-4/6">
        <span className="text-text-sub capitalize">
          {brand.toUpperCase()}, {category}
        </span>
        <h2 className="mb-2 font-bold text-lg">{title}</h2>
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl">
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
