import { Frown } from "lucide-react";

import ProductVertical from "./ProductVertical";
import ProductHorizontal from "./ProductHorizontal";
import { useFilters } from "../hooks/useFilters.js";
import { useLayout } from "../hooks/useLayout.js";

function ProductContainer(props) {
  const { filters } = useFilters();
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

  return (
    <div className="py-[25px] px-[15px]">
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
          <div className="flex flex-col gap-y-5">
            {filteredProducts.map((product) =>
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
