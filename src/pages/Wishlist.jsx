import { Link } from "react-router-dom";
import { Frown } from "lucide-react";

import { useWishlist } from "../hooks/useWishlist.js";
import ProductWishlist from "../components/ProductWishlist";

function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <div className="py-[25px] px-[15px]">
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
            <h1 className="font-bold text-2xl text-center">Список бажань</h1>
            <h3 className="font-medium text-base text-text-sub text-center">
              Всього елментів {wishlist.length}
            </h3>
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

export default Wishlist;
