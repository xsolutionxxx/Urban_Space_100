import { useEffect, useMemo, useState } from "react";
import { FiltersContext } from "./FiltersContext";

export const FiltersProvider = ({ children }) => {
  const defaultFilters = {
    brands: {},
    categories: {},
    priceFrom: "",
    priceTo: "",
  };

  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState(() => {
    const savedFilters = localStorage.getItem("filters");
    return savedFilters ? JSON.parse(savedFilters) : defaultFilters;
  });

  useEffect(() => {
    if (filtersOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [filtersOpen]);

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  const activeFiltersText = useMemo(() => {
    return Object.entries(filters)
      .filter(([, value]) => value !== "")
      .reduce((acc, [key, value]) => {
        if (key === "brand" || key === "category") {
          acc.push(value);
        } else if (key === "priceFrom" && filters.priceTo) {
          acc.push(`від ${value} до ${filters.priceTo}`);
        } else if (key === "priceFrom" && !filters.priceTo) {
          acc.push(`від ${value}`);
        } else if (key === "priceTo" && !filters.priceFrom) {
          acc.push(`до ${value}`);
        }
        return acc;
      }, [])
      .join(", ");
  }, [filters]);

  const hasActiveFilters = Object.keys(activeFiltersText).length > 0;

  const resetFilters = () => setFilters(defaultFilters);

  return (
    <FiltersContext.Provider
      value={{
        filtersOpen,
        setFiltersOpen,
        filters,
        setFilters,
        activeFiltersText,
        hasActiveFilters,
        resetFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
