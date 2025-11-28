import { Square, Columns2 } from "lucide-react";

function LayoutControls({ layout, onChange }) {
  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => onChange("show-col-1")}
        className={`p-[5px] cursor-pointer ${
          layout === "show-col-1" ? "opacity-100" : "opacity-25"
        }`}
      >
        <Square strokeWidth={2} size={24} />
      </button>

      <button
        onClick={() => onChange("show-col-2")}
        className={`p-[5px] cursor-pointer ${
          layout === "show-col-2" ? "opacity-100" : "opacity-25"
        }`}
      >
        <Columns2 strokeWidth={2} size={24} />
      </button>
    </div>
  );
}

export default LayoutControls;
