import { useEffect, useState } from "react";
import { ListFilter, Coins } from "lucide-react";

import { useFilters } from "@features/filters/useFilters.js";
import { useTheme } from "@features/theme/useTheme.js";
import { useDebounce } from "@hooks/useDebounce.js";

import FiltersSection from "./FiltersSection.jsx";
import FiltersControls from "./FiltersControls.jsx";
import PriceControls from "./PriceControls.jsx";
import ResetFiltersButton from "./ResetFiltersButton.jsx";

function FiltersPanel() {
  const { filters, setFilters, setFiltersOpen, resetFilters } = useFilters();
  const { resetTheme } = useTheme();

  const [localPriceFrom, setLocalPriceFrom] = useState(filters.priceFrom);
  const [localPriceTo, setLocalPriceTo] = useState(filters.priceTo);

  const debouncedFrom = useDebounce(localPriceFrom, 300);
  const debouncedTo = useDebounce(localPriceTo, 300);

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

  const handleBrandChange = (brand) =>
    setFilters((prev) => ({ ...prev, brand }));

  const handleCategoryChange = (category) =>
    setFilters((prev) => ({ ...prev, category }));

  const handleResetAll = () => {
    resetFilters();
    resetTheme();
  };

  return (
    <div className="fixed top-0 left-0 z-100 w-80 h-full bg-primary">
      <button
        onClick={() => setFiltersOpen(false)}
        className="p-3 w-full bg-text-main text-lg text-accent tracking-widest uppercase"
      >
        Закрити
      </button>
      <div className="p-4 w-full flex flex-col gap-6">
        <FiltersSection
          icon={ListFilter}
          title="Фільтри"
          className="flex flex-col gap-y-1"
        >
          <FiltersControls
            brand={filters.brand}
            category={filters.category}
            onBrandChange={handleBrandChange}
            onCategoryChange={handleCategoryChange}
          />
        </FiltersSection>

        <FiltersSection
          icon={Coins}
          title="Ціна"
          className="flex flex-col gap-y-1"
        >
          <PriceControls
            priceFrom={localPriceFrom}
            priceTo={localPriceTo}
            onPriceFromChange={setLocalPriceFrom}
            onPriceToChange={setLocalPriceTo}
          />
        </FiltersSection>

        <ResetFiltersButton onReset={handleResetAll} />
      </div>
    </div>
  );
}

export default FiltersPanel;
