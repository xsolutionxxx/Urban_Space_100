import { useEffect, useState } from "react";
import { SettingsContext } from "./SettingsContext";

export const SettingsProvider = ({ children }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    if (settingsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [settingsOpen]);

  return (
    <SettingsContext.Provider value={{ settingsOpen, setSettingsOpen }}>
      {children}
    </SettingsContext.Provider>
  );
};
