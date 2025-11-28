import ProductCard from "./ProductCard";

function ProductList({ products, layout = "show-col-2" }) {
  return (
    <div
      className={`grid gap-x-3 gap-y-5 mt-6 ${
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
