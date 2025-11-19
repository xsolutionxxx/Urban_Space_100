import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return width;
};

const cleanCut = (text, limit) => {
  const sliced = text.slice(0, limit);
  const trimmed = sliced.replace(/[\s,.!?;:]+$/g, "");
  return trimmed;
};

function ExpandableText({ text }) {
  const width = useWindowWidth();
  const [expanded, setExpanded] = useState(false);

  const limit = width < 375 ? 30 : width < 425 ? 60 : 200;

  if (text.length <= limit)
    return <p className="sm:text-base lg:text-lg leading-snug">{text}</p>;

  const shortened = cleanCut(text, limit);

  const isSame = shortened.length >= text.length - 2;

  if (isSame) {
    return <p className="sm:text-base lg:text-lg leading-snug">{text}</p>;
  }

  const displayedText = expanded ? text : shortened + "...";

  return (
    <>
      <p className="mb-1 sm:text-base lg:text-lg leading-snug">
        {displayedText}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex justify-start items-center gap-1 font-medium xs:text-base lg:text-lg leading-snug"
      >
        {expanded ? (
          <>
            Меньше
            <ChevronUp strokeWidth={1.5} size={12} />
          </>
        ) : (
          <>
            Більше
            <ChevronDown strokeWidth={1.5} size={12} />
          </>
        )}
      </button>
    </>
  );
}

export default ExpandableText;
