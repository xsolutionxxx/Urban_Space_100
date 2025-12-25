import { useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { useLayout } from "@features/layout/useLayout";
import { useProcessedProducts } from "@hooks/useProcessedProducts";
import { useHttp } from "@hooks/useHttp";

import ErrorMessage from "@error/ErrorMessage";

import FiltersHeader from "@components/product/FiltersHeader";
import ProductEmpty from "@components/product/ProductEmpty";
import ProductList from "@components/product/ProductList";
import SetContent from "@utils/setContent";

import { UrbanService } from "@service/UrbanService";

const CatalogPage = () => {
  const { layout } = useLayout();
  
  const [products, setProducts] = useState([]);
  
  const { request, process } = useHttp();

  useEffect(() => {
      UrbanService.getAllProducts(request)
          .then(data => setProducts(data))
  }, []);

  const finalProducts = useProcessedProducts(products);

  const View = () => {
    return (
      <div className="h-full flex-1 flex flex-col">
        <ErrorBoundary FallbackComponent={ErrorMessage}>
            <FiltersHeader />
        </ErrorBoundary>

        <ErrorBoundary FallbackComponent={ErrorMessage}>
            {finalProducts.length > 0 ? (
                <ProductList products={finalProducts} layout={layout} />
            ) : (
                <ProductEmpty />
            )}
        </ErrorBoundary>
      </div>
    )
  };

  return (
      <>
        {SetContent(process, View, products.length > 0 ? products : null)}
      </>
  );
};

export default CatalogPage;
