import { useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { useLayout } from "@features/layout/useLayout";
import { useProcessedProducts } from "@hooks/useProcessedProducts";

import Spinner from "@components/spinner/Spinner";
import ErrorMessage from "@error/ErrorMessage";

import FiltersHeader from "@components/product/FiltersHeader";
import ProductEmpty from "@components/product/ProductEmpty";
import ProductList from "@components/product/ProductList";

import UrbanService from "@service/UrbanService";

function CatalogPage() {
  const { layout } = useLayout();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { getAllProducts } = UrbanService();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
          const data = await getAllProducts();
          setProducts(data);
          setError(false);
      } catch (e) {
          console.error("Помилка завантаження каталогу:", e);
          setError(true);
      } finally {
          setLoading(false);
      }
    };

    fetchData();
  }, []);

  const finalProducts = useProcessedProducts(products);

  if (loading) return <div className="h-full flex-1 flex justify-center items-center"><Spinner /></div>;

  if (error) return <div className="p-10 text-center text-red-500">Не вдалося завантажити товари.</div>;

  return (
    <div className="h-full flex-1 flex flex-col">
      <ErrorBoundary FallbackComponent={ErrorMessage}>
        <FiltersHeader />
      </ErrorBoundary>

      <ErrorBoundary>
        {finalProducts.length <= 0 ? (
          <ProductEmpty />
        ) : (
          <ProductList products={finalProducts} layout={layout} />
        )}
      </ErrorBoundary>
    </div>
  );
}

export default CatalogPage;
