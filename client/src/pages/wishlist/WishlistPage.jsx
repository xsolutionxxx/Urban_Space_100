import { useWishlist } from "@features/wishlist/useWishlist.js";
import WishlistEmpty from "@components/wishlist/WishlistEmpty";
import WishlistHeader from "@components/wishlist/WishlistHeader";
import WishlistGrid from "@components/wishlist/WishlistGrid";
import WishlistInfo from "../../components/wishlist/WishlistInfo";

function WishlistPage() {
  const { wishlist, resetWishlist } = useWishlist();

  return (
    <div className="py-6 px-4 h-full flex-1 flex flex-col">
      <WishlistHeader />
      {wishlist.length === 0 ? (
        <WishlistEmpty />
      ) : (
        <div className="pt-4 flex flex-col gap-y-5">
          <WishlistInfo count={wishlist.length} onClear={resetWishlist} />
          <WishlistGrid items={wishlist} />
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
