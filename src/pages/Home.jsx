import { useOutletContext } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductContainer from "../components/ProductContainer";

function Home() {
  const { products } = useOutletContext();
  return <ProductContainer products={products} />;
}

export default Home;
