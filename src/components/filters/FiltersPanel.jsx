import { useEffect, useState } from "react";

import { useFilters } from "@features/filters/useFilters.js";
import { useDebounce } from "@hooks/useDebounce.js";

import FiltersSection from "./FiltersSection.jsx";
import FiltersControls from "./FiltersControls.jsx";
import PriceControls from "./PriceControls.jsx";

function FiltersPanel({ products }) {
  const { filters, setFilters, setFiltersOpen, resetFilters } = useFilters();

  const [localPriceFrom, setLocalPriceFrom] = useState(filters.priceFrom);
  const [localPriceTo, setLocalPriceTo] = useState(filters.priceTo);

  const debouncedFrom = useDebounce(localPriceFrom, 300);
  const debouncedTo = useDebounce(localPriceTo, 300);

  const brands = [...new Set(products.map((p) => p.brand))];
  const categories = [...new Set(products.map((p) => p.category))];

  useEffect(() => {
    setFilters((prev) => ({ ...prev, priceFrom: debouncedFrom }));
  }, [debouncedFrom, setFilters]);

  useEffect(() => {
    setFilters((prev) => ({ ...prev, priceTo: debouncedTo }));
  }, [debouncedTo, setFilters]);

  useEffect(() => {
    setLocalPriceFrom(filters.priceFrom);
    setLocalPriceTo(filters.priceTo);
  }, [filters.priceFrom, filters.priceTo]);

  return (
    <>
      <div
        onClick={() => setFiltersOpen(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs z-90"
      />
      <div className="fixed top-0 left-0 z-100 w-80 h-screen bg-primary flex flex-col">
        <button
          onClick={() => setFiltersOpen(false)}
          className="mb-px px-10 py-3 w-full bg-accent text-lg text-white/90 leading-8 tracking-widest uppercase"
        >
          Закрити
        </button>

        <button
          onClick={() => resetFilters()}
          className="px-10 py-3 w-full bg-accent text-sm text-white/90 tracking-widest uppercase shadow-[0_5px_30px_rgba(0,0,0,0.4)]"
        >
          Очистити фільтри
        </button>

        <div className="pb-20 flex-1 overflow-y-auto">
          <FiltersSection title="Ціна">
            <PriceControls
              priceFrom={localPriceFrom}
              priceTo={localPriceTo}
              onPriceFromChange={setLocalPriceFrom}
              onPriceToChange={setLocalPriceTo}
            />
          </FiltersSection>

          <FiltersSection title="Виробник">
            <FiltersControls filterKey="brands" filterNames={brands} />
          </FiltersSection>

          <FiltersSection title="Категорія">
            <FiltersControls filterKey="categories" filterNames={categories} />
          </FiltersSection>
        </div>

        <button
          onClick={() => setFiltersOpen(false)}
          className="absolute bottom-0 px-10 py-5 w-full h-20 bg-white text-lg text-accent uppercase shadow-[0_-10px_30px_rgba(0,0,0,0.4)]"
        >
          Застосувати
        </button>
      </div>
    </>
  );
}

export default FiltersPanel;
