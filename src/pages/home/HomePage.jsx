import { useOutletContext } from "react-router-dom";

import ProductContainer from "@components/product/ProductContainer";

function HomePage() {
  const { products } = useOutletContext();
  return <ProductContainer products={products} />;
}

export default HomePage;
