import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function FiltersSection({ title, children }) {
  const lsKey = `filters-section-${title}-open`;

  const [isOpen, setIsOpen] = useState(() => {
    const saved = localStorage.getItem(lsKey);
    return saved === null ? true : saved === "true";
  });

  useEffect(() => {
    localStorage.setItem(lsKey, isOpen);
  }, [isOpen]);

  return (
    <div className="px-4 py-5 flex flex-col border-b border-text-main/10 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center"
      >
        <h3 className="font-medium text-lg leading-tight uppercase">{title}</h3>
        {isOpen ? (
          <ChevronUp strokeWidth={1.5} size={28} />
        ) : (
          <ChevronDown strokeWidth={1.5} size={28} />
        )}
      </button>
      {isOpen && children}
    </div>
  );
}

export default FiltersSection;
