import { useState } from "react";
import { Heart, HeartOff } from "lucide-react";

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
  const [openDescription, setOpenDescription] = useState(false);

  const { toggleWishlist, isInWishlist } = useWishlist();
  const liked = isInWishlist(id);

  return (
    <div className="p-[15px] flex gap-[15px] bg-primary rounded-2xl shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-1/2 h-[180px] rounded-2xl object-cover"
      />
      <div className="w-1/2">
        <span className="text-text-sub capitalize">
          {brand.toUpperCase()}, {category}
        </span>
        <h2 className="mb-3 font-bold text-lg">{title}</h2>
        <button
          onClick={() => setOpenDescription(!openDescription)}
          className="mb-2 font-medium underline"
        >
          {openDescription ? "Згорнути опис" : "Розгорнути опис"}
        </button>
        {openDescription ? <p className="mb-2.5">{description}</p> : null}
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl">
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
            className="flex justify-start items-center gap-1 font-medium text-sm cursor-pointer"
          >
            {liked ? (
              <HeartOff strokeWidth={1.5} size={28} fill="red" />
            ) : (
              <Heart strokeWidth={1.5} size={28} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductHorizontal;
