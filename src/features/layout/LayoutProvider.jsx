import { useState, useEffect } from "react";
import { LayoutContext } from "./LayoutContext";

export const LayoutProvider = ({ children }) => {
  const [layout, setLayout] = useState(() => {
    return localStorage.getItem("layout") || "show-col-2";
  });

  useEffect(() => {
    localStorage.setItem("layout", layout);
  }, [layout]);

  const toggleLayout = (type) => setLayout(type);

  const resetLayout = () => setLayout("show-col-2");

  return (
    <LayoutContext.Provider value={{ layout, toggleLayout, resetLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};
