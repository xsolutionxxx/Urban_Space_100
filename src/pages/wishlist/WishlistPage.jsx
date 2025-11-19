import { Link } from "react-router-dom";
import { Frown } from "lucide-react";

import { useWishlist } from "@features/wishlist/useWishlist.js";
import ProductWishlist from "@components/product/ProductWishlist";

function WishlistPage() {
  const { wishlist, resetWishlist } = useWishlist();

  return (
    <div className="py-6 px-4">
      {wishlist.length === 0 ? (
        <div>
          <h3 className="flex justify-center items-center gap-2 font-bold text-xl">
            Ваш список бажань порожній
            <Frown />
          </h3>
          <h2 className="mb-2 font-medium text-lg text-center">
            Спробуйте обрати щось по душі:
          </h2>
          <Link
            to="/"
            className="flex justify-center font-medium text-lg uppercase underline"
          >
            Клаць туть!
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-1.5">
            <h1 className="font-bold text-2xl text-center">Вподобайки</h1>
            <h3 className="font-medium text-base text-text-sub text-center">
              Всього товарів додано в улюблені: {wishlist.length}
            </h3>
            <button
              onClick={() => resetWishlist()}
              className="px-2 py-1 w-full h-full bg-accent border rounded"
            >
              Очистити список улюблених
            </button>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {wishlist.map((product) => (
              <ProductWishlist key={product.id} {...product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
