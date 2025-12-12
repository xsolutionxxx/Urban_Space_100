import { useEffect, useState } from "react";
import { SortContext } from "./SortContext";

export const SortProvider = ({ children }) => {
  const savedSort = localStorage.getItem("sort");

  const [sortType, setSortType] = useState(savedSort || "");

  useEffect(() => {
    localStorage.setItem("sort", sortType);
  }, [sortType]);

  const resetSortType = () => setSortType("");

  return (
    <SortContext.Provider value={{ sortType, setSortType, resetSortType }}>
      {children}
    </SortContext.Provider>
  );
};
