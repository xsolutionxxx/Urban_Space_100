import { Sun, Moon } from "lucide-react";

import { useTheme } from "@features/theme/useTheme.js";

function ThemeControls() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative py-1 w-18 h-9 rounded-3xl cursor-pointer bg-secondary"
    >
      <div
        className={`absolute top-1 w-7 h-7 flex justify-center items-center bg-primary rounded-full ${
          theme === "light" ? " left-1" : "right-1"
        }`}
      >
        {theme === "light" ? (
          <Sun strokeWidth={1.5} size={20} />
        ) : (
          <Moon strokeWidth={1.5} size={20} />
        )}
      </div>
    </button>
  );
}

export default ThemeControls;
