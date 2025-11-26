import ProductVertical from "./ProductVertical";
import ProductHorizontal from "./ProductHorizontal";
import Message from "@components/ui/Message.jsx";

import { useFilters } from "@features/filters/useFilters.js";
import { useSort } from "@features/sort/useSort.js";
import { useLayout } from "@features/layout/useLayout.js";

function ProductContainer(props) {
  const { filters, activeFiltersText, hasActiveFilters, resetFilters } =
    useFilters();
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
      className={`py-6 px-6 sm:px-10 h-full flex-1 flex flex-col ${
        layout === "vertical" ? "lg:px-15" : "md:px-15"
      }`}
    >
      {filteredProducts.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          <div className="w-full max-w-md px-4 text-center">
            <Message
              title={'Упс! Нічого не знайдено'}
              text={
                "Спробуйте скинути фільтри або оберіть інші параметри, щоб побачити більше товарів."
              }
            />
          </div>

          <button
            onClick={() => resetFilters()}
            className="px-4 py-2 max-w-[320px] w-full bg-accent border rounded"
          >
            Скинути фільтри
          </button>
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center gap-1.5">
            {/* <h1 className="font-bold text-2xl text-center">Список товарів</h1> */}

            {!hasActiveFilters ? (
              <h3 className="mb-3 font-medium text-base text-text-sub text-center">
                Всього товарів знайдено: {filteredProducts.length}
              </h3>
            ) : (
              <div className="mb-6 flex flex-col justify-between gap-5 text-center">
                <h3 className="font-medium text-base text-text-sub">
                  Всього товарів знайдено: {filteredProducts.length} <br /> Активні
                  фільтри: {activeFiltersText}
                </h3>

                <button
                  onClick={() => resetFilters()}
                  className="px-2 py-1 w-full h-full bg-accent border rounded"
                >
                  Скинути фільтри
                </button>
              </div>
            )}
          </div>

          <div
            className={`grid grid-cols-1 gap-6 mt-6 ${
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
