import { Heart, HeartOff } from "lucide-react";

import { useWishlist } from "../hooks/useWishlist";

function ProductVertical({
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
    <div className="p-[15px] bg-primary rounded-2xl shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-[260px] mb-3 rounded-2xl object-cover"
      />
      <span className="text-text-sub capitalize">
        {brand.toUpperCase()}, {category}
      </span>
      <h2 className="mb-2 font-bold text-lg">{title}</h2>
      <p className="mb-2">{description}</p>
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
          className="flex items-end gap-1 font-medium text-sm cursor-pointer"
        >
          {liked ? (
            <HeartOff strokeWidth={1.5} size={28} fill="red" />
          ) : (
            <Heart strokeWidth={1.5} size={28} />
          )}
        </button>
      </div>
    </div>
  );
}

export default ProductVertical;
