// components/settings/SettingsPanel.jsx
import { useEffect, useState } from "react";
import {
  ListFilter,
  Coins,
  ArrowDownNarrowWide,
  View,
  SunMoon,
  LayoutList,
  GalleryVerticalEnd,
} from "lucide-react";

import { useFilters } from "@features/filters/useFilters.js";
import { useSort } from "@features/sort/useSort.js";
import { useLayout } from "@features/layout/useLayout.js";
import { useTheme } from "@features/theme/useTheme.js";
import { useDebounce } from "@hooks/useDebounce.js";

import SettingsSection from "./SettingsSection.jsx";
import FiltersControls from "./FiltersControls.jsx";
import PriceControls from "./PriceControls.jsx";
import SortControls from "./SortControls.jsx";
import LayoutControls from "./LayoutControls.jsx";
import ThemeControls from "./ThemeControls.jsx";
import ResetSettingsButton from "./ResetSettingsButton.jsx";

function SettingsPanel() {
  const { filters, setFilters, resetFilters } = useFilters();
  const { sortType, setSortType, resetSortType } = useSort();
  const { layout, toggleLayout, resetLayout } = useLayout();
  const { resetTheme } = useTheme();

  const [localPriceFrom, setLocalPriceFrom] = useState(filters.priceFrom);
  const [localPriceTo, setLocalPriceTo] = useState(filters.priceTo);

  const debouncedFrom = useDebounce(localPriceFrom, 300);
  const debouncedTo = useDebounce(localPriceTo, 300);

  // синхронізація debounce → глобальні фільтри
  useEffect(() => {
    setFilters((prev) => ({ ...prev, priceFrom: debouncedFrom }));
  }, [debouncedFrom, setFilters]);

  useEffect(() => {
    setFilters((prev) => ({ ...prev, priceTo: debouncedTo }));
  }, [debouncedTo, setFilters]);

  // синхронізація глобальних фільтрів → локальні інпути
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
    resetSortType();
    resetLayout();
    resetTheme();
  };

  return (
    <div className="fixed top-[119px] z-40 w-full bg-primary shadow-md">
      <div className="py-3 px-4 mx-auto max-w-[1920px] grid grid-cols-3 gap-y-4 gap-x-6">
        <SettingsSection
          icon={ListFilter}
          title="Фільтри"
          className="col-span-2 flex flex-col gap-y-1 md:col-span-1"
        >
          <FiltersControls
            brand={filters.brand}
            category={filters.category}
            onBrandChange={handleBrandChange}
            onCategoryChange={handleCategoryChange}
          />
        </SettingsSection>

        <SettingsSection
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
        </SettingsSection>

        <SettingsSection
          icon={ArrowDownNarrowWide}
          title="Сортування"
          className="col-span-3 md:col-span-1"
        >
          <SortControls sortType={sortType} onChange={setSortType} />
        </SettingsSection>

        <SettingsSection
          icon={View}
          title="Вигляд"
          className="col-span-2 3xs:col-span-1"
        >
          <LayoutControls layout={layout} onChange={toggleLayout} />
        </SettingsSection>

        <SettingsSection icon={SunMoon} title="Тема">
          <ThemeControls />
        </SettingsSection>

        <div className="col-span-3 3xs:col-span-1 min-h-8 3xs:h-full">
          <ResetSettingsButton onReset={handleResetAll} />
        </div>
      </div>
    </div>
  );
}

export default SettingsPanel;
