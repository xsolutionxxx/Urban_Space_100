import { useState, useEffect } from "react";
import { LayoutContext } from "./LayoutContext";

export const LayoutProvider = ({ children }) => {
  const [layout, setLayout] = useState(() => {
    return localStorage.getItem("layout") || "vertical";
  });

  useEffect(() => {
    localStorage.setItem("layout", layout);
  }, [layout]);

  const toggleLayout = (type) => setLayout(type);

  return (
    <LayoutContext.Provider value={{ layout, toggleLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};
