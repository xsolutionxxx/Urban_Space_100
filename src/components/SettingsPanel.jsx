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

import ToggleTheme from "./ToggleTheme";
import { useFilters } from "../hooks/useFilters.js";
import { useSort } from "../hooks/useSort.js";
import { useLayout } from "../hooks/useLayout.js";
import { useTheme } from "../hooks/useTheme.js";
import { useDebounce } from "../hooks/useDebounce.js";

function SettingsPanel() {
  const { filters, setFilters, resetFilters } = useFilters();
  const { sortType, setSortType, resetSortType } = useSort();
  const { layout, toggleLayout, resetLayout } = useLayout();
  const { resetTheme } = useTheme();

  const [localPriceFrom, setLocalPriceFrom] = useState(filters.priceFrom);
  const [localPriceTo, setLocalPriceTo] = useState(filters.priceTo);

  const debouncedFrom = useDebounce(localPriceFrom, 300);
  const debouncedTo = useDebounce(localPriceTo, 300);

  useEffect(() => {
    setFilters((prevFilters) => ({ ...prevFilters, priceFrom: debouncedFrom }));
  }, [debouncedFrom]);

  useEffect(() => {
    setFilters((prevFilters) => ({ ...prevFilters, priceTo: debouncedTo }));
  }, [debouncedTo]);

  useEffect(() => {
    setLocalPriceFrom(filters.priceFrom);
    setLocalPriceTo(filters.priceTo);
  }, [filters.priceFrom, filters.priceTo]);

  return (
    <div className="fixed top-[119px] z-40 py-3 px-4 w-full grid grid-cols-3 gap-y-4 gap-x-6 bg-primary shadow-md">
      <div className="col-span-2 flex flex-col gap-y-1 md:col-span-1">
        <div className="mb-1 flex items-center gap-2">
          <ListFilter strokeWidth={2} size={20} />
          <h3 className="font-medium text-lg md:text-xl xl:text-2xl leading-tight">
            Фільтри
          </h3>
        </div>

        <label
          htmlFor="brand"
          className="text-base md:text-lg xl:text-xl leading-snug"
        >
          Оберіть виробника:
        </label>
        <select
          value={filters.brand}
          onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
          name="brand"
          id="brand"
          className="px-1 mb-2 h-8 border rounded"
        >
          <option className="bg-primary" value="">
            Будь-хто
          </option>
          <option className="bg-primary" value="фятб">
            ФЯТБ
          </option>
          <option className="bg-primary" value="icon">
            ICON
          </option>
        </select>

        <label
          htmlFor="category"
          className="text-base md:text-lg xl:text-xl leading-snug"
        >
          Оберіть категорію:
        </label>
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          name="category"
          id="category"
          className="px-1 h-8 border rounded"
        >
          <option className="bg-primary" value="">
            Будь-яка категорія
          </option>
          <option className="bg-primary" value="шкарпетки">
            Шкарпетки
          </option>
          <option className="bg-primary" value="горнятка">
            Горнятка
          </option>
          <option className="bg-primary" value="магніти">
            Магніти
          </option>
        </select>
      </div>

      <div className="flex flex-col gap-y-1">
        <div className="mb-1 flex items-center gap-2">
          <Coins strokeWidth={2} size={20} />
          <h3 className="font-medium text-lg md:text-xl xl:text-2xl leading-tight">
            Ціна
          </h3>
        </div>

        <label
          htmlFor="from"
          className="text-base md:text-lg xl:text-xl leading-snug"
        >
          Від:
        </label>
        <input
          value={localPriceFrom}
          onChange={(e) => setLocalPriceFrom(e.target.value)}
          name="from"
          type="text"
          placeholder="100"
          className="px-2 mb-2 h-8 border rounded"
        />

        <label
          htmlFor="to"
          className="text-base md:text-lg xl:text-xl leading-snug"
        >
          До:
        </label>
        <input
          value={localPriceTo}
          onChange={(e) => setLocalPriceTo(e.target.value)}
          name="to"
          type="text"
          placeholder="500"
          className="px-2 h-8 border rounded"
        />
      </div>

      <div className="col-span-3 md:col-span-1">
        <div className="mb-2 flex items-center gap-2 md:mb-9">
          <ArrowDownNarrowWide strokeWidth={2} size={20} />
          <h3 className="font-medium text-lg md:text-xl xl:text-2xl leading-tight">
            Сортування
          </h3>
        </div>

        <div className="flex flex-col">
          <label htmlFor="sort"></label>
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            name="sort"
            id="sort"
            className="px-1 h-8 border rounded"
          >
            <option className="bg-primary" value="">
              Та як є
            </option>
            <option className="bg-primary" value="az">
              За алфавітом
            </option>
            <option className="bg-primary" value="price-low">
              Спочатку дешевше
            </option>
            <option className="bg-primary" value="price-high">
              Спочатку дорожче
            </option>
          </select>
        </div>
      </div>

      <div className="col-span-2 3xs:col-span-1">
        <div className="mb-2 flex items-center gap-2">
          <View strokeWidth={2} size={20} />
          <h3 className="font-medium text-lg md:text-xl xl:text-2xl leading-tight">
            Вигляд
          </h3>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => toggleLayout("vertical")}
            className={`p-[5px] cursor-pointer ${
              layout === "vertical" ? "border rounded" : null
            }`}
          >
            <GalleryVerticalEnd
              strokeWidth={2}
              size={24}
              className="rotate-180"
            />
          </button>

          <button
            onClick={() => toggleLayout("horizontal")}
            className={`p-[5px] cursor-pointer ${
              layout === "horizontal" ? "border rounded" : null
            }`}
          >
            <LayoutList strokeWidth={2} size={24} />
          </button>
        </div>
      </div>

      <div>
        <div className="mb-2 flex items-center gap-2">
          <SunMoon strokeWidth={2} size={20} />
          <h3 className="font-medium text-lg md:text-xl xl:text-2xl leading-tight">
            Тема
          </h3>
        </div>
        <ToggleTheme />
      </div>

      <div className="col-span-3 3xs:col-span-1 min-h-8 3xs:h-full">
        <button
          onClick={() => {
            resetFilters();
            resetSortType();
            resetLayout();
            resetTheme();
          }}
          className="px-2 w-full h-full bg-accent border rounded"
        >
          Скинути всі налаштування
        </button>
      </div>
    </div>
  );
}

export default SettingsPanel;
