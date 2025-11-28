import { X, Undo } from "lucide-react";

import { useWishlist } from "@features/wishlist/useWishlist";

function WishlistCard({ id, images, brand, category, title, price, currency }) {
  const { toggleWishlist } = useWishlist();

  return (
    <div className="relative flex bg-primary rounded-2xl shadow-lg">
      <button
        className="absolute top-1.5 right-1.5 lg:cursor-pointer"
        onClick={() =>
          toggleWishlist({
            id,
          })
        }
      >
        <X strokeWidth={1.5} size={28} />
      </button>
      <img
        src={images[0]}
        alt={title}
        className="aspect-5/6 w-30 rounded-l-2xl object-cover"
      />
      <div className="pl-4 p-3 pr-10 w-full flex flex-col justify-between gap-3">
        <div>
          <span className="text-xs xs:text-[13px] md:text-sm leading-snug text-text-main/65 capitalize">
            {brand.toUpperCase()}, {category}
          </span>
          <h2 className="font-medium text-sm xs:text-lg md:text-xl lg:text-2xl leading-tight md:leading-snug">
            {title}
          </h2>
        </div>
        <span className="font-bold text-lg xs:text-xl">
          {price} {currency}
        </span>
      </div>
    </div>
  );
}

export default WishlistCard;
