import { Heart, HeartCrack } from "lucide-react";

import { useWishlist } from "@features/wishlist/useWishlist";

import BackToHomeBtn from "../ui/BackToHomeBtn";
import ProductSwiper from "./productSwiper/ProductSwiper";

function ProductMain({ product }) {
  const { id, title, price, description, images, brand, category } = product;

  const { toggleWishlist, isInWishlist } = useWishlist();
  const liked = isInWishlist(id);

  return (
    <>
      <BackToHomeBtn
        linkText="Назад до крамнички"
        className="hidden md:block"
      />
      {images.length > 1 ? (
        <ProductSwiper images={images} title={title} />
      ) : (
        <img
          src={images[0]}
          alt={title}
          className="w-full aspect-5/6 object-cover"
        />
      )}
      <div className="px-4 pb-8 pt-6">
        <span className="text-xs 2xs:text-[13px] md:text-sm leading-snug text-start capitalize">
          {brand.toUpperCase()}, {category}
        </span>
        <h2 className="mb-4 font-bold text-base xs:text-xl leading-tight md:leading-snug uppercase">
          {title}
        </h2>
        <p className="mb-3">{description}</p>
        <span className="block mb-5 font-medium text-xl">{price} грн</span>
        <button
          onClick={() =>
            toggleWishlist({
              id,
              images,
              brand,
              category,
              title,
              price,
            })
          }
          className={`flex items-center justify-center gap-2 px-5.5 py-2.5 w-full text-sm uppercase shadow-[0_4px_32px_rgba(0,0,0,0.4)] ${!liked ? "bg-white  text-accent" : "bg-accent text-white/90"}`}
        >
          {!liked ? <Heart /> : <HeartCrack />}
          {!liked ? "Додати до улюблених" : "Видалити з улюблених"}
        </button>
      </div>
    </>
  );
}

export default ProductMain;
