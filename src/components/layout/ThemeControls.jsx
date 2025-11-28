import { Sun, Moon } from "lucide-react";

import { useTheme } from "@features/theme/useTheme.js";

function ThemeControls() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="cursor-pointer">
      {theme === "light" ? (
        <Sun strokeWidth={1.5} size={36} />
      ) : (
        <Moon strokeWidth={1.5} size={36} />
      )}
    </button>
  );
}

export default ThemeControls;
