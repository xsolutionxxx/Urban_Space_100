import { useEffect, useState } from "react";
import {
  ListFilter,
  Coins,
  View,
  SunMoon,
  LayoutList,
  GalleryVerticalEnd,
} from "lucide-react";

import ToggleTheme from "./ToggleTheme";
import { useLayout } from "../hooks/useLayout.js";
import { useFilters } from "../hooks/useFilters.js";
import { useDebounce } from "../hooks/useDebounce.js";

function SettingsPanel() {
  const { layout, toggleLayout } = useLayout();
  const { filters, setFilters } = useFilters();

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
    <div className="fixed top-[100px] z-40 py-3 px-[15px] w-full grid grid-cols-[60%_40%] gap-y-5 gap-x-8 bg-primary shadow-md">
      <div className="flex flex-col">
        <div className="mb-2 flex items-center gap-2">
          <ListFilter strokeWidth={2} size={17} />
          <h3 className="font-medium text-base">Фільтри</h3>
        </div>

        <label htmlFor="brand" className="mb-1 text-base">
          Оберіть виробника:
        </label>
        <select
          value={filters.brand}
          onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
          name="brand"
          id="brand"
          className="px-1 mb-3 h-8 border rounded"
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

        <label htmlFor="category" className="mb-1 text-base">
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

      <div className="flex flex-col">
        <div className="mb-2 flex items-center gap-2">
          <Coins strokeWidth={2} size={18} />
          <h3 className="font-medium text-base">Ціна</h3>
        </div>

        <label htmlFor="from" className="mb-1 text-base">
          Від:
        </label>
        <input
          value={localPriceFrom}
          onChange={(e) => setLocalPriceFrom(e.target.value)}
          name="from"
          type="text"
          placeholder="100"
          className="px-2 w-20 mb-3 h-8 border rounded"
        />

        <label htmlFor="to" className="mb-1 text-base">
          До:
        </label>
        <input
          value={localPriceTo}
          onChange={(e) => setLocalPriceTo(e.target.value)}
          name="to"
          type="text"
          placeholder="500"
          className="px-2 w-20 h-8 border rounded"
        />
      </div>

      <div>
        <div className="mb-2 flex items-center gap-2">
          <View strokeWidth={2} size={18} />
          <h3 className="font-medium text-base">Вигляд</h3>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => toggleLayout("vertical")}
            className={`p-1 cursor-pointer ${
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
            className={`p-1 cursor-pointer ${
              layout === "horizontal" ? "border rounded" : null
            }`}
          >
            <LayoutList strokeWidth={2} size={24} />
          </button>
        </div>
      </div>

      <div>
        <div className="mb-2 flex items-center gap-2">
          <SunMoon strokeWidth={2} size={18} />
          <h3 className="font-medium text-base">Тема</h3>
        </div>
        <ToggleTheme />
      </div>
    </div>
  );
}

export default SettingsPanel;
