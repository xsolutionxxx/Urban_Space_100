import { useMemo } from "react";
import { useFilters } from "@features/filters/useFilters";
import { useSort } from "@features/sort/useSort";

export const useProcessedProducts = (products) => {
  const { filters } = useFilters();
  const { sortType } = useSort();

  const processedProducts = useMemo(() => {
    if (!products) return [];

    const filtered = products.filter((product) => {
      const selectedBrands = Object.keys(filters.brands || {}).filter(
        (key) => filters.brands[key]
      );
      const selectedCategories = Object.keys(filters.categories || {}).filter(
        (key) => filters.categories[key]
      );

      const brandMatch =
        selectedBrands.length === 0
          ? true
          : selectedBrands.includes(product.brand);

      const categoryMatch =
        selectedCategories.length === 0
          ? true
          : selectedCategories.includes(product.category);

      const priceFromMatch = filters.priceFrom
        ? product.price >= Number(filters.priceFrom)
        : true;

      const priceToMatch = filters.priceTo
        ? product.price <= Number(filters.priceTo)
        : true;

      return brandMatch && categoryMatch && priceFromMatch && priceToMatch;
    });

    return [...filtered].sort((a, b) => {
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
  }, [products, filters, sortType]);

  return processedProducts;
};
