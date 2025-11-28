import { useLayout } from "@features/layout/useLayout.js";
import { useSort } from "@features/sort/useSort.js";
import { useFilters } from "@features/filters/useFilters.js";

import LayoutControls from "./LayoutControls.jsx";
import SortControls from "./SortControls.jsx";

function FiltersHeader() {
  const { layout, toggleLayout } = useLayout();
  const { sortType, setSortType } = useSort();
  const { setFiltersOpen } = useFilters();

  return (
    <div className="mt-6 flex flex-col gap-4">
      <div className="px-6 sm:px-10 flex items-center justify-between">
        <h2 className="font-bold text-2xl md:text-2xl lg:text-3xl leading-tight md:leading-snug uppercase">
          Крамничка
        </h2>
        <LayoutControls layout={layout} onChange={toggleLayout} />
      </div>
      <div className="border-y border-text-main/45 py-2.5 grid grid-cols-[70%_auto]">
        <div className="pl-6 border-r border-text-main/45 pr-[15px] flex justify-center items-center gap-3 uppercase">
          Сортувати:
          <SortControls sortType={sortType} onChange={setSortType} />
        </div>
        <button
          onClick={() => setFiltersOpen(true)}
          className="px-[15px] uppercase"
        >
          Фільтр
        </button>
      </div>
    </div>
  );
}

export default FiltersHeader;
