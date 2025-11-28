import ProductFilters from "./ProductFilters";
import ProductEmpty from "./ProductEmpty";
import ProductList from "./ProductList";

import { useFilters } from "@features/filters/useFilters";
import { useSort } from "@features/sort/useSort";
import { useLayout } from "@features/layout/useLayout";

function ProductContainer({ products }) {
  const { filters, activeFiltersText, hasActiveFilters, resetFilters } =
    useFilters();
  const { sortType } = useSort();
  const { layout } = useLayout();

  const filteredProducts = products.filter((product) => {
    const categoryMatch = filters.category
      ? product.category === filters.category
      : true;
    const brandMatch = filters.brand ? product.brand === filters.brand : true;
    const priceFromMatch = filters.priceFrom
      ? product.price >= +filters.priceFrom
      : true;
    const priceToMatch = filters.priceTo
      ? product.price <= +filters.priceTo
      : true;

    return brandMatch && categoryMatch && priceFromMatch && priceToMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortType) {
      case "popular":
        return a.title.localeCompare(b.title);
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className={`py-6 px-6 sm:px-10 h-full flex-1 flex flex-col`}>
      {filteredProducts.length === 0 ? (
        <ProductEmpty onReset={resetFilters} />
      ) : (
        <>
          <ProductFilters
            total={filteredProducts.length}
            hasActiveFilters={hasActiveFilters}
            activeFiltersText={activeFiltersText}
            onReset={resetFilters}
          />

          <ProductList products={sortedProducts} layout={layout} />
        </>
      )}
    </div>
  );
}

export default ProductContainer;
