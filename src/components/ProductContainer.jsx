import { Frown } from "lucide-react";

import ProductVertical from "./ProductVertical";
import ProductHorizontal from "./ProductHorizontal";
import { useFilters } from "../hooks/useFilters.js";
import { useSort } from "../hooks/useSort.js";
import { useLayout } from "../hooks/useLayout.js";

function ProductContainer(props) {
  const { filters } = useFilters();
  const { sortType } = useSort();
  const { layout } = useLayout();

  const filteredProducts = props.products.filter((product) => {
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
      case "az":
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
    <div
      className={`py-6 px-6 sm:px-10 ${
        layout === "vertical" ? "lg:px-15" : "md:px-15"
      }`}
    >
      {filteredProducts.length === 0 ? (
        <h3 className="flex justify-center items-center gap-2 font-bold text-xl">
          Жодного результату не знайдено
          <Frown />
        </h3>
      ) : (
        <>
          <h3 className="mb-3 font-medium text-base text-text-sub text-center">
            Всього елментів {filteredProducts.length}
          </h3>
          <div
            className={`grid grid-cols-1 gap-6 ${
              layout === "vertical"
                ? "sm:grid-cols-2 lg:gap-10 xl:grid-cols-3 2xl:grid-cols-4"
                : "lg:grid-cols-2 md:gap-8"
            }`}
          >
            {sortedProducts.map((product) =>
              layout === "vertical" ? (
                <ProductVertical key={product.id} {...product} />
              ) : (
                <ProductHorizontal key={product.id} {...product} />
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductContainer;
