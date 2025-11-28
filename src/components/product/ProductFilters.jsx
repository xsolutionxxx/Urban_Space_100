import { useLayout } from "@features/layout/useLayout.js";
import { useSort } from "@features/sort/useSort.js";

import LayoutControls from "../settings/LayoutControls";
import SortControls from "./SortControls.jsx";

function ProductFilters() {
  const { layout, toggleLayout } = useLayout();
  const { sortType, setSortType } = useSort();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl md:text-2xl lg:text-3xl leading-tight md:leading-snug uppercase">
          Крамничка
        </h2>
        <LayoutControls layout={layout} onChange={toggleLayout} />
      </div>
      <div className="border-y border-text-main/45 py-2.5 grid grid-cols-[70%_auto]">
        <div className="border-r border-text-main/45 pr-[15px] flex justify-center items-center gap-3 uppercase">
          Сортувати:
          <SortControls sortType={sortType} onChange={setSortType} />
        </div>
        <button className="pl-[15px] uppercase">Фільтр</button>
      </div>
    </div>
  );
}

export default ProductFilters;
