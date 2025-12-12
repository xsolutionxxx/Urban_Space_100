import { useEffect, useState } from "react";
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
    try {
      const savedFilters = localStorage.getItem("filters");
      if (savedFilters) {
        const parsed = JSON.parse(savedFilters);
        return { ...defaultFilters, ...parsed };
      }
    } catch (error) {
      console.error("Error reading filters from localStorage", error);
    }
    return defaultFilters;
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

  const resetFilters = () => setFilters(defaultFilters);

  return (
    <FiltersContext.Provider
      value={{
        filtersOpen,
        setFiltersOpen,
        filters,
        setFilters,
        resetFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
