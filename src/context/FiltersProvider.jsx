import { useEffect, useState } from "react";
import { FiltersContext } from "./FiltersContext";

export const FiltersProvider = ({ children }) => {
  const defaultFilters = {
    brand: "",
    category: "",
    priceFrom: "",
    priceTo: "",
  };

  const [filters, setFilters] = useState(() => {
    const savedFilters = localStorage.getItem("filters");
    return savedFilters ? JSON.parse(savedFilters) : defaultFilters;
  });

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};
