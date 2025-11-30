import FiltersHeader from "./FiltersHeader";
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
    const selectedBrands = Object.keys(filters.brands);
    const selectedCategories = Object.keys(filters.categories);

    const brandMatch =
      selectedBrands.length === 0
        ? true
        : selectedBrands.includes(product.brand);

    const categoryMatch =
      selectedCategories.length === 0
        ? true
        : selectedCategories.includes(product.category);

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
    <div className="h-full flex-1 flex flex-col">
      {filteredProducts.length === 0 ? (
        <>
          <h2 className="pl-6 pt-6.5 font-bold text-2xl md:text-2xl lg:text-3xl leading-tight md:leading-snug uppercase">
            Крамничка
          </h2>
          <ProductEmpty onReset={resetFilters} />
        </>
      ) : (
        <>
          <FiltersHeader
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
