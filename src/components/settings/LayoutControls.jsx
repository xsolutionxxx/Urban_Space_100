import { LayoutList, GalleryVerticalEnd } from "lucide-react";

function LayoutControls({ layout, onChange }) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => onChange("vertical")}
        className={`p-[5px] cursor-pointer ${
          layout === "vertical" ? "border rounded" : ""
        }`}
      >
        <GalleryVerticalEnd strokeWidth={2} size={24} className="rotate-180" />
      </button>

      <button
        onClick={() => onChange("horizontal")}
        className={`p-[5px] cursor-pointer ${
          layout === "horizontal" ? "border rounded" : ""
        }`}
      >
        <LayoutList strokeWidth={2} size={24} />
      </button>
    </div>
  );
}

export default LayoutControls;
