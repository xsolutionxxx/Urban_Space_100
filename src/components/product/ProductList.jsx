import ProductCard from "./ProductCard";

function ProductList({ products, layout }) {
  return (
    <div
      className={`px-4 py-6 grid gap-x-3 gap-y-5 ${
        layout === "show-col-2" ? "grid-cols-2" : "grid-cols-1"
      }`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
