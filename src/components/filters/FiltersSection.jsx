import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function FiltersSection({ title, sectionKey, children }) {
  const safeKey = (sectionKey || title).toLowerCase().replace(/\s+/g, "-");
  const lsKey = `filters-section-${safeKey}-open`;

  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window === "undefined") return true;

    try {
      const saved = localStorage.getItem(lsKey);
      return saved === null ? true : saved === "true";
    } catch (e) {
      console.warn("localStorage unavailable", e);
      return true;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(lsKey, isOpen);
    } catch (e) {
      console.warn("localStorage unavailable", e);
    }
  }, [isOpen, lsKey]);

  return (
    <div
      className={`px-4 py-5 flex flex-col border-b border-text-main/10 last:border-b-0`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center group"
      >
        <h3 className="font-medium text-lg leading-tight uppercase group-hover:text-accent transition-colors">
          {title}
        </h3>
        {isOpen ? (
          <ChevronUp
            strokeWidth={1.5}
            size={28}
            className="text-gray-500 group-hover:text-accent transition-colors"
          />
        ) : (
          <ChevronDown
            strokeWidth={1.5}
            size={28}
            className="text-gray-500 group-hover:text-accent transition-colors"
          />
        )}
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

export default FiltersSection;
