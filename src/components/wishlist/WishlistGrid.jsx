import ProductWishlist from "@components/product/ProductWishlist";

function WishlistGrid({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {items.map((product) => (
        <ProductWishlist key={product.id} {...product} />
      ))}
    </div>
  );
}

export default WishlistGrid;