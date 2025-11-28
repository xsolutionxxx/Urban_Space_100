import WishlistCard from "./WishlistCard";

function WishlistGrid({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {items.map((product) => (
        <WishlistCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default WishlistGrid;
