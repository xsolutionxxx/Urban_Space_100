import { Minus } from "lucide-react";

function PriceControls({
  priceFrom,
  priceTo,
  onPriceFromChange,
  onPriceToChange,
}) {
  return (
    <div className="flex justify-between items-center gap-3">
      <label
        htmlFor="from"
        className="sr-only w-full text-base md:text-lg xl:text-xl leading-snug"
      />
      <input
        value={priceFrom}
        onChange={(e) => onPriceFromChange(e.target.value)}
        name="from"
        type="text"
        placeholder="100"
        className="w-full px-2 h-8 border rounded"
      />

      <Minus strokeWidth={2} size={32} className="w-32" />

      <label
        htmlFor="to"
        className="sr-only w-full text-base md:text-lg xl:text-xl leading-snug"
      />
      <input
        value={priceTo}
        onChange={(e) => onPriceToChange(e.target.value)}
        name="to"
        type="text"
        placeholder="500"
        className="w-full px-2 h-8 border rounded"
      />
    </div>
  );
}

export default PriceControls;
