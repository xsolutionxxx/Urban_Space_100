import { useOutletContext } from "react-router-dom";

import { useLayout } from "@features/layout/useLayout";
import { useProcessedProducts } from "@hooks/useProcessedProducts";

import FiltersHeader from "@components/product/FiltersHeader";
import ProductEmpty from "@components/product/ProductEmpty";
import ProductList from "@components/product/ProductList";

function CatalogPage() {
  const { products } = useOutletContext();

  const finalProducts = useProcessedProducts(products);
  const { layout } = useLayout();

  return (
    <div className="h-full flex-1 flex flex-col">
      <FiltersHeader />
      {finalProducts.length <= 0 ? (
        <ProductEmpty />
      ) : (
        <ProductList products={finalProducts} layout={layout} />
      )}
    </div>
  );
}

export default CatalogPage;
