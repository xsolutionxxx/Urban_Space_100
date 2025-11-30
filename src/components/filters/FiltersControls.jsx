import { useFilters } from "@features/filters/useFilters.js";

function FiltersControls({ filterKey, filterNames }) {
  const { filters, setFilters } = useFilters();

  const handleCheckboxChange = (name, isChecked) => {
    setFilters((prev) => {
      const updatedFilterGroup = { ...prev[filterKey] };

      if (isChecked) {
        updatedFilterGroup[name] = true;
      } else {
        delete updatedFilterGroup[name];
      }

      return { ...prev, [filterKey]: updatedFilterGroup };
    });
  };

  return (
    <div className="pt-5 flex flex-col gap-3">
      {filterNames.map((name, i) => (
        <label key={i} className="flex items-center gap-3">
          <input
            type="checkbox"
            name={name}
            checked={filters[filterKey]?.[name] ?? false}
            onChange={(e) => handleCheckboxChange(name, e.target.checked)}
            className="w-5 h-5"
          />
          <span className="text-base text-text-main/70">{name}</span>
        </label>
      ))}
    </div>
  );
}

export default FiltersControls;
