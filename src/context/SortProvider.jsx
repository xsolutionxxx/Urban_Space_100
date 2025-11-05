import { useEffect, useState } from "react";
import { SortContext } from "./SortContext";

export const SortProvider = ({ children }) => {
  const savedSort = localStorage.getItem("sort");

  const [sortType, setSortType] = useState(savedSort || "");

  useEffect(() => {
    localStorage.setItem("sort", sortType);
  }, [sortType]);

  return (
    <SortContext.Provider value={{ sortType, setSortType }}>
      {children}
    </SortContext.Provider>
  );
};
